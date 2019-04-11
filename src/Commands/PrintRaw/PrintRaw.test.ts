import LanguageDecoder from '../../LanguageDecoder';
import PrintRaw from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: PrintRaw;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new PrintRaw(LanguageDecoderInstance);
});

describe('PrintRaw Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});
