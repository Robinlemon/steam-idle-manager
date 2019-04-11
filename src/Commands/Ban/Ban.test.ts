import LanguageDecoder from '../../LanguageDecoder';
import Ban from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Ban;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Ban(LanguageDecoderInstance);
});

describe('Ban Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});