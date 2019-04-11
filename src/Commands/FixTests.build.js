const fsPromise = require('fs').promises;

const Test = DirName => `\
import LanguageDecoder from '../../LanguageDecoder';
import ${DirName} from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: ${DirName};

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new ${DirName}(LanguageDecoderInstance);
});

describe('${DirName} Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
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
