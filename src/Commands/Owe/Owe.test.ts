import LanguageDecoder from '../../LanguageDecoder';
import Owe from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Owe;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Owe(LanguageDecoderInstance);
});

describe('Owe Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});