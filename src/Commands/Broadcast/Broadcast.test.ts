import Broadcast from './index';
import { EFriendRelationship } from '../../SteamEnums';

const RandInt = (Min: number, Max: number): number =>
    Math.floor(Math.random() * (Max - Min + 1)) + Min;

const Used: string[] = [];
const RandomSteamID = (): string => {
    const Generated = (
        RandInt(0, 2 ** 31 - 1) * 2 +
        76561197960265729
    ).toString();

    if (Used.includes(Generated)) return RandomSteamID();
    else {
        Used.push(Generated);
        return Generated;
    }
};

describe('Broadcast Command', () => {
    const Instance = new Broadcast();

    test('Should be Admin only', () => {
        expect(Instance.IsAdmin).toBeTruthy();
    });

    test('Should have the !broadcast identifier', () => {
        expect(Instance.Identifier).toBe('broadcast');
    });

    test('Should have one argument of type string', () => {
        const Args = [String];

        expect(Instance.ArgumentMap).toEqual(expect.arrayContaining(Args));
        expect(Instance.ArgumentMap).toHaveLength(Args.length);
    });

    describe('Should trigger', () => {
        const Friends = [RandomSteamID(), RandomSteamID(), RandomSteamID()];

        const MockSteamClient = {
            myFriends: Friends.reduce(
                (Data: any, SteamID: string) => {
                    Data[SteamID] = EFriendRelationship.Friend;
                    return Data;
                },
                {
                    [RandomSteamID()]: EFriendRelationship.Blocked
                }
            ),
            chatMessage: jest.fn()
        };
        const Message = 'testing';

        Instance.Trigger({
            SteamClient: MockSteamClient,
            SteamID64: '',
            Arguments: [Message]
        });

        test('It should only message friends', () => {
            expect(MockSteamClient.chatMessage.mock.calls.length).toBe(
                Friends.length
            );
        });

        test('It should message each friend', () => {
            MockSteamClient.chatMessage.mock.calls.forEach(
                (ArgumentMap: any[], IDx: number) => {
                    expect(Friends).toContain(ArgumentMap[0]);
                    expect(ArgumentMap[1]).toBe(Message);
                }
            );
        });
    });
});
