import Owe from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Owe;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Owe(LanguageDecoderInstance);
});

describe('Owe Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeFalsy();
    });

    test('It should have the !owe identifier', () => {
        expect(Instance.Identifier).toBe('owe');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
