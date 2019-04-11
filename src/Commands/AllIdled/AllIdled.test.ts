import LanguageDecoder from '../../LanguageDecoder';
import AllIdled from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: AllIdled;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new AllIdled(LanguageDecoderInstance);
});

describe('AllIdled Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});