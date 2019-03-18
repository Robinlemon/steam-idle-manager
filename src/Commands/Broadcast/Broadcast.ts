import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { EFriendRelationship } from '../../SteamEnums';
import LanguageDecoder from '../../LanguageDecoder';
import Logger from '../../Logger';

type Friend = [string, EFriendRelationship];
type FriendsList = {
    [steamid: string]: EFriendRelationship;
};

export default class BroadcastMessage extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('broadcast', LanguageDecoder, true, [
            { type: String, name: 'Message' }
        ]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('BroadcastDescription');
    }

    public Trigger = ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): void => {
        const [MessageToSend] = Arguments;

        const Friends: FriendsList = SteamClient.myFriends;
        const AsPairs: Friend[] = Object.entries(Friends);
        const ActualFriends: string[] = AsPairs.reduce(
            (Data: string[], [FriendSteamID64, Relationship]: Friend) => {
                if (Relationship === EFriendRelationship.Friend)
                    Data.push(FriendSteamID64);
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
