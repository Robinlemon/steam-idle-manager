import AddTag from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: AddTag;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new AddTag(LanguageDecoderInstance);
});

describe('AddTag Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('It should have the !addtag identifier', () => {
        expect(Instance.Identifier).toBe('addtag');
    });

    test('It should have the correct arguments', () => {
        const Args = [String, [String]];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
