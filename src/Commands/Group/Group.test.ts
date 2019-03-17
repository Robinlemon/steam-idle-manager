import Group from './index';
import LanguageDecoder from '../../LanguageDecoder';

let LanguageDecoderInstance: LanguageDecoder;
let Instance: Group;

beforeAll(async () => {
    LanguageDecoderInstance = new LanguageDecoder();
    await LanguageDecoderInstance.GetInternalPromise();

    Instance = new Group(LanguageDecoderInstance);
});

describe('Group Command', () => {
    test('It should be admin only', () => {
        expect(Instance.IsAdmin).toBeFalsy();
    });

    test('It should have the !group identifier', () => {
        expect(Instance.Identifier).toBe('group');
    });

    test('It should have the correct arguments', () => {
        const Args: any[] = [];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('It should trigger', () => {});
});
