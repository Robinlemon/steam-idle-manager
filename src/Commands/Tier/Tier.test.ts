import Tier from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Tier;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Tier(LanguageDecoderInstance);
});

describe('Tier Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeFalsy();
    });

    test('It should have the !tier identifier', () => {
        expect(Instance.Identifier).toBe('tier');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
