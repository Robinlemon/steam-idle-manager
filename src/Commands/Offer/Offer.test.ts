import Offer from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Offer;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Offer(LanguageDecoderInstance);
});

describe('Offer Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('It should have the !offer identifier', () => {
        expect(Instance.Identifier).toBe('offer');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [String];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});