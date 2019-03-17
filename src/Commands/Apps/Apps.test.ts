import Apps from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Apps;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Apps(LanguageDecoderInstance);
});

describe('Apps Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('It should have the !apps identifier', () => {
        expect(Instance.Identifier).toBe('apps');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
