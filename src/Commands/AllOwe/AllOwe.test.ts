import LanguageDecoder from '../../LanguageDecoder';
import AllOwe from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: AllOwe;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new AllOwe(LanguageDecoderInstance);
});

describe('AllOwe Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});