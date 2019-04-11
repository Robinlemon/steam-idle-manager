import LanguageDecoder from '../../LanguageDecoder';
import { EFriendRelationship } from '../../SteamEnums';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

type Friend = [string, EFriendRelationship];
interface IFriendsList {
    [steamid: string]: EFriendRelationship;
}

export default class BroadcastMessage extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Broadcast', Decoder, true, [{ type: String, name: 'Message' }]);
    }

    public Trigger = ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): void => {
        const [MessageToSend] = Arguments;

        const Friends: IFriendsList = SteamClient.myFriends;
        const AsPairs: Friend[] = Object.entries(Friends);
        const ActualFriends: string[] = AsPairs.reduce(
            (Data: string[], [FriendSteamID64, Relationship]: Friend) => {
                if (Relationship === EFriendRelationship.Friend) {
                    Data.push(FriendSteamID64);
                }
                return Data;
            },
            []
        );

        ActualFriends.forEach((FriendSteamID64: string) =>
            SteamClient.chatMessage(FriendSteamID64, MessageToSend)
        );

        const Message = this.InterpolateString('BroadcastResponse', [
            MessageToSend
        ]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
