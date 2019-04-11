import LanguageDecoder from '../../LanguageDecoder';
import Stock from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Stock;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Stock(LanguageDecoderInstance);
});

describe('Stock Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});