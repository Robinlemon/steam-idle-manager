import Ban from './index';

describe('Ban Command', () => {
    const Instance = new Ban();

    test('Should be Admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('Should have the !ban identifier', () => {
        expect(Instance.Identifier).toBe('ban');
    });

    test('Should have one argument of type string', () => {
        const Args = [String];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });
});
