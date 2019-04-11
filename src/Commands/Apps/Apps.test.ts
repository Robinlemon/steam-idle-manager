import LanguageDecoder from '../../LanguageDecoder';
import Apps from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Apps;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Apps(LanguageDecoderInstance);
});

describe('Apps Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});