import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';

export default class SetGamesIdled extends BaseCommand {
    constructor() {
        super('setgamesidled', true, ['number']);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): Promise<void> => {
        const [GamesIdled] = Arguments;

        const CurrentUser = await User.findOneAndUpdate(
            {
                SteamID64,
            },
            {
                SetGamesIdled: GamesIdled,
            },
            { new: true },
        );

        await CurrentUser.save();

        SteamClient.chatMessage(
            SteamID64,
            `Updated your games idled to ${GamesIdled}.`,
        );
    };
}
