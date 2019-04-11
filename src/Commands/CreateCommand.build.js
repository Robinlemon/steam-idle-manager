const fsPromise = require('fs').promises;
const [, , DirName] = process.argv;

const Base = `\
import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import LanguageDecoder from '../../LanguageDecoder';
import { NotImplemented } from '../../Errors';
import { Levels } from '../../Logger';

export default class ${DirName} extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('${DirName}', Decoder, true);
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
