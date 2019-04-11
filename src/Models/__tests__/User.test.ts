import User from '../User';

const Instance = new User();

describe('User model', () => {
    Instance.GamesIdled = 10;

    test('It should get the correct tier', () => {
        expect(Instance.GetTier().Name).toBe('Junior - Idler');
    });
});
