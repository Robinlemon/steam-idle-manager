import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class Unban extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('unban', LanguageDecoder, true, [String]);

        this.Description = this.InterpolateString('UnbanDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const [ToUnban] = Arguments;

        await User.findOneAndUpdate(
            {
                SteamID64: ToUnban
            },
            {
                Banned: false
            }
        );

        SteamClient.chatMessage(SteamID64, `User ${ToUnban} is now unbanned`);
    };
}
