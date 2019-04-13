const fsPromise = require('fs').promises;

const Test = DirName => `\
import { ${DirName} } from '..';
import CommandManager from '../../CommandManager';
import LanguageDecoder from '../../LanguageDecoder';

let Manager: CommandManager;
let Instance: ${DirName};

beforeAll(() => {
    Manager = new CommandManager(null, [], '!', null, new LanguageDecoder());
    Manager.RegisterClasses();
    Instance = Manager.GetCommandByIdentifier('${DirName}') as ${DirName};
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
