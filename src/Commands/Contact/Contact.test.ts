import LanguageDecoder from '../../LanguageDecoder';
import Contact from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Contact;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Contact(LanguageDecoderInstance);
});

describe('Contact Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});