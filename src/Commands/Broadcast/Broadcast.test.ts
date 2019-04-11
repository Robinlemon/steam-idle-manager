import LanguageDecoder from '../../LanguageDecoder';
import Broadcast from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Broadcast;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Broadcast(LanguageDecoderInstance);
});

describe('Broadcast Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});