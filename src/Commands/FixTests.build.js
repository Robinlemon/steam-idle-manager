const fsPromise = require('fs').promises;

const Test = DirName => `\
import ${DirName} from './index';
import LanguageDecoder from '../../LanguageDecoder';

const LanguageDecoderInstance = new LanguageDecoder();

beforeAll(async () => {
    await LanguageDecoderInstance.GetInternalPromise();
});

describe('${DirName} Command', () => {
    const Instance = new ${DirName}();

    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('It should have the !${DirName.toLowerCase()} identifier', () => {
        expect(Instance.Identifier).toBe('${DirName.toLowerCase()}');
    });

    test('It should have the correct arguments', () => {
        const Args = [];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {

    });
});\
`;

(async () => {
    const CommandNames = await fsPromise.readdir(`${__dirname}`);

    const Results = await Promise.all(
        CommandNames.filter(ItemName => !ItemName.includes('.')).map(
            CommandName =>
                fsPromise.readdir(`${__dirname}/${CommandName.split('.')[0]}`)
        )
    );

    const ToMakeTestsFor = Results.filter(Result => {
        for (FileName of Result) {
            if (FileName.match(/\.test]/g) !== null) return false;
        }

        return true;
    });

    const CommandsToMakeTestsFor = ToMakeTestsFor.map(
        CommandFileArr =>
            CommandFileArr.filter(Name => Name !== 'index.ts')[0].split('.')[0]
    );

    const Promises = CommandsToMakeTestsFor.map(CommandName => {
        fsPromise.writeFile(
            `${__dirname}/${CommandName}/${CommandName}.test.ts`,
            Test(CommandName)
        );
    });

    await Promise.all(Promises);

    console.log(`Created tests for:\n${CommandsToMakeTestsFor.join('\n')}`);
})();
