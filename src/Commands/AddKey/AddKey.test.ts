import LanguageDecoder from '../../LanguageDecoder';
import AddKey from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: AddKey;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new AddKey(LanguageDecoderInstance);
});

describe('AddKey Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});