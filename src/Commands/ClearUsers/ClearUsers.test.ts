import LanguageDecoder from '../../LanguageDecoder';
import ClearUsers from './index';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: ClearUsers;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new ClearUsers(LanguageDecoderInstance);
});

describe('ClearUsers Command', () => {
    test('It should trigger', () => {
        expect(true).toBeTruthy();
    });
});