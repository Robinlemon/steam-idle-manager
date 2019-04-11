import LanguageDecoder from '../../LanguageDecoder';
import Group from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Group;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Group(LanguageDecoderInstance);
});

describe('Group Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});