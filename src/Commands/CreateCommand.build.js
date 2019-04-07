const fsPromise = require('fs').promises;
const [, , DirName] = process.argv;

const Base = `\
import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';

export default class ${DirName} extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('${DirName}', LanguageDecoder, true);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('${DirName}Description');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        throw new NotImplemented();
    };
}\
`;

const Test = `\
import ${DirName} from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: ${DirName};

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new ${DirName}(LanguageDecoderInstance);
});

describe('${DirName} Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('It should have the !${DirName.toLowerCase()} identifier', () => {
        expect(Instance.Identifier).toBe('${DirName.toLowerCase()}');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [String];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});\
`;

const Index = `\
import ${DirName} from './${DirName}';
export default ${DirName};\
`;

(async () => {
    await fsPromise.mkdir(`${__dirname}/${DirName}`);

    const DataMap = [Base, Test, Index];
    const FileMap = [`${DirName}.ts`, `${DirName}.test.ts`, `index.ts`].map(
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
