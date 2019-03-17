import Stock from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Stock;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Stock(LanguageDecoderInstance);
});

describe('Stock Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeFalsy();
    });

    test('It should have the !stock identifier', () => {
        expect(Instance.Identifier).toBe('stock');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
