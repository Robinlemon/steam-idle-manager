import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class Unban extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('unban', LanguageDecoder, true, [
            { type: String, name: 'SteamID' }
        ]);

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

        const Message = this.InterpolateString('UnbanResponse', [ToUnban]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
