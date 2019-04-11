import LanguageDecoder from '../../LanguageDecoder';
import Tier from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Tier;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Tier(LanguageDecoderInstance);
});

describe('Tier Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});