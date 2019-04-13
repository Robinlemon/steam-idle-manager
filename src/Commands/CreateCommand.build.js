const fsPromise = require('fs').promises;
const [, , DirName] = process.argv;

const Base = `\
import CommandManager from '../../CommandManager';
import { Levels } from '../../Logger';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class ${DirName} extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('${DirName}', Manager, false);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        throw new NotImplemented();
    };
}\
`;

const Test = `\
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

const Index = `\
import ${DirName} from './${DirName}';
export default ${DirName};\
`;

(async () => {
    await fsPromise.mkdir(`${__dirname}/${DirName}`);

    const DataMap = [Base, /*Test,*/ Index];
    const FileMap = [`${DirName}.ts`, /*`${DirName}.test.ts`,*/ `index.ts`].map(
        (Name, IDx) =>
            fsPromise.writeFile(`${__dirname}/${DirName}/${Name}`, DataMap[IDx])
    );

    FileMap.push(
        fsPromise.appendFile(
            `${__dirname}/index.ts`,
            `export { default as ${DirName} } from './${DirName}';\n`
        )
    );

    await Promise.all(FileMap);

    console.log('Done!');
})();
