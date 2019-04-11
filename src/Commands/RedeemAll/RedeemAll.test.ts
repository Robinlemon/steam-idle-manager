import LanguageDecoder from '../../LanguageDecoder';
import RedeemAll from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: RedeemAll;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new RedeemAll(LanguageDecoderInstance);
});

describe('RedeemAll Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});