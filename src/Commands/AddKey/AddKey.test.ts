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
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('It should have the !addkey identifier', () => {
        expect(Instance.Identifier).toBe('addkey');
    });

    test('It should have the correct arguments', () => {
        const Args = [Number, [String]];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
