import Contact from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Contact;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Contact(LanguageDecoderInstance);
});

describe('Contact Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeFalsy();
    });

    test('It should have the !contact identifier', () => {
        expect(Instance.Identifier).toBe('contact');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
