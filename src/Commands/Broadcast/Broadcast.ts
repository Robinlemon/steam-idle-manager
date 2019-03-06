import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { EFriendRelationship } from '../../SteamEnums';

type Friend = [string, EFriendRelationship];
type FriendsList = {
    [steamid: string]: EFriendRelationship;
};

export default class BroadcastMessage extends BaseCommand {
    constructor() {
        super('broadcast', true, ['string']);
    }

    public Trigger = ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): void => {
        const [Message] = Arguments;

        const Friends: FriendsList = SteamClient.myFriends;
        const AsPairs: Friend[] = Object.entries(Friends);
        const ActualFriends: string[] = AsPairs.reduce(
            (Data: string[], [FriendSteamID64, Relationship]: Friend) => {
                if (Relationship === EFriendRelationship.Friend)
                    Data.push(FriendSteamID64);
                return Data;
            },
            [],
        );

        ActualFriends.forEach((FriendSteamID64: string) =>
            SteamClient.chatMessage(FriendSteamID64, Message),
        );
    };
}
