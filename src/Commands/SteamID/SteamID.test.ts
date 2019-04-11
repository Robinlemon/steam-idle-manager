import LanguageDecoder from '../../LanguageDecoder';
import SteamID from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: SteamID;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new SteamID(LanguageDecoderInstance);
});

describe('SteamID Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});