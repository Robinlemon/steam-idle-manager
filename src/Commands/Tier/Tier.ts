import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';

export default class Tier extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('tier', LanguageDecoder, false);

        this.Logger = new Logger(this.constructor.name);
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

        const Tier = CurrentUser.GetTier();
        const Tags = CurrentUser.Tags.join(' ');

        const Message = this.InterpolateString('TierResponse', [
            Tier.Name,
            Tags
        ]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
