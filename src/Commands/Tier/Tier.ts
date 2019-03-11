import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';

export default class Tier extends BaseCommand {
    constructor() {
        super('tier', '', false, []);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const CurrentUser = await User.findOne({
            SteamID64: SteamID64
        });

        SteamClient.chatMessage(
            SteamID64,
            `You are tier: ${CurrentUser.GetTier().Name}`
        );
    };
}
