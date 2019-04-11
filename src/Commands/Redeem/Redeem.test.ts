import LanguageDecoder from '../../LanguageDecoder';
import Redeem from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Redeem;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Redeem(LanguageDecoderInstance);
});

describe('Redeem Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});