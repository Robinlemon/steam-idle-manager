import CommandManager from '../../CommandManager';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class AllIdled extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('AllIdled', Manager, true);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        const Records = await User.find({
            History: {
                Count: {
                    $gt: 0
                }
            }
        });

        const Message = Records.map(CurrentUser =>
            this.InterpolateString('AllIdledResponse', [
                CurrentUser.SteamID64,
                CurrentUser.GamesIdled
            ])
        ).join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
