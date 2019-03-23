import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class Tier extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('tier', LanguageDecoder, false, [
            { type: String, name: 'SteamID', optional: true }
        ]);

        this.Description = this.InterpolateString('TierDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const CurrentUser = await User.findOne({
            SteamID64: SteamID64
        });

        const Message = this.InterpolateString('TierResponse', [
            CurrentUser.GetTier().Name
        ]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
