const fsPromise = require('fs').promises;
const [, , DirName] = process.argv;

const Base = `\
import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';

export default class ${DirName} extends BaseCommand {
    constructor() {
        super('${DirName.toLowerCase()}', false, []);
    }

    public Trigger = ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): void => {
        throw new NotImplemented();
    };
}\
`;

const Test = `\
test('${DirName} Command', () => {
    expect(true).toBeTruthy();
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
            fsPromise.writeFile(
                `${__dirname}/${DirName}/${Name}`,
                DataMap[IDx],
            ),
    );

    FileMap.push(
        fsPromise.appendFile(
            `${__dirname}/index.ts`,
            `export { default as ${DirName} } from './${DirName}';\n`,
        ),
    );

    await Promise.all(FileMap);

    console.log('Done!');
})();
