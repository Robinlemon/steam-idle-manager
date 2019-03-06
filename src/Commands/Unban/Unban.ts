import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';

export default class Unban extends BaseCommand {
    constructor() {
        super('unban', true, ['string']);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): Promise<void> => {
        const [ToUnban] = Arguments;

        await User.findOneAndUpdate(
            {
                SteamID64: ToUnban,
            },
            {
                Banned: false,
            },
        );

        SteamClient.chatMessage(SteamID64, `User ${ToUnban} is now unbanned`);
    };
}
