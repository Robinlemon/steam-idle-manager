import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';

export default class Ban extends BaseCommand {
    constructor() {
        super('ban', true, ['string']);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): Promise<void> => {
        const [ToBan] = Arguments;

        await User.findOneAndUpdate(
            {
                SteamID64: ToBan,
            },
            {
                Banned: true,
            },
        );

        SteamClient.chatMessage(SteamID64, `User ${ToBan} is now banned`);
    };
}
