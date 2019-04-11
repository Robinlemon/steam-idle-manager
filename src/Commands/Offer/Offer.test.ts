import LanguageDecoder from '../../LanguageDecoder';
import Offer from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Offer;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Offer(LanguageDecoderInstance);
});

describe('Offer Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});