import CommandManager from '../../CommandManager';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Tier extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('Tier', Manager, false);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        const CurrentUser = await User.findOne({
            SteamID64
        });

        const CurrentTier = CurrentUser.GetTier();
        const Tags = CurrentUser.Tags.join(' ');
        const HasTags = Tags.length > 0;

        const Message = [
            this.InterpolateString('TierResponse', [CurrentTier.Name]),
            ...(HasTags
                ? this.InterpolateString('TierResponseTag', [Tags])
                : [])
        ].join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
