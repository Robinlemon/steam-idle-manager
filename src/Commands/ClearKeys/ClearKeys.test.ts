import LanguageDecoder from '../../LanguageDecoder';
import ClearKeys from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: ClearKeys;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new ClearKeys(LanguageDecoderInstance);
});

describe('ClearKeys Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});