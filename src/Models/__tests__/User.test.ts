import User from '../User';

const Instance = new User();

describe('User model', () => {
    Instance.GamesIdled = 10;

    test('It should get the correct tier', () => {
        expect(Instance.GetTier().Name).toBe('Junior - Idler');
    });

    test('It should update the last interaction', () => {
        const Now = Date.now();
        Instance.UpdateInteraction();
        expect(Instance.LastActive).toBeGreaterThan(Now);
    });
});

process.on('unhandledRejection', (Reason: Error) => {
    return;
});
