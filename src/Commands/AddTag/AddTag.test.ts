import LanguageDecoder from '../../LanguageDecoder';
import AddTag from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: AddTag;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new AddTag(LanguageDecoderInstance);
});

describe('AddTag Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});