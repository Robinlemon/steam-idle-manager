import LanguageDecoder from '../../LanguageDecoder';
import Compare from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Compare;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Compare(LanguageDecoderInstance);
});

describe('Compare Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});