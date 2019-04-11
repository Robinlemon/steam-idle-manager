import LanguageDecoder from '../../LanguageDecoder';
import Unban from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Unban;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Unban(LanguageDecoderInstance);
});

describe('Unban Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});