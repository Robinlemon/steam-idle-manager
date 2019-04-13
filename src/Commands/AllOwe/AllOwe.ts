import CommandManager from '../../CommandManager';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class AllOwe extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('AllOwe', Manager, true);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        const Records = await User.find({
            DoesOwe: true
        });

        const Message = Records.map(CurrentUser =>
            this.InterpolateString('AllOweResponse', [CurrentUser.SteamID64])
        ).join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
