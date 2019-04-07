import ClearKeys from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: ClearKeys;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new ClearKeys(LanguageDecoderInstance);
});

describe('ClearKeys Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('It should have the !clearkeys identifier', () => {
        expect(Instance.Identifier).toBe('clearkeys');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [String];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});