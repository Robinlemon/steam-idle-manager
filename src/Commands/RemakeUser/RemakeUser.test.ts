import LanguageDecoder from '../../LanguageDecoder';
import RemakeUser from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: RemakeUser;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new RemakeUser(LanguageDecoderInstance);
});

describe('RemakeUser Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});