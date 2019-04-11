import LanguageDecoder from '../../LanguageDecoder';
import RemoveTag from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: RemoveTag;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new RemoveTag(LanguageDecoderInstance);
});

describe('RemoveTag Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});