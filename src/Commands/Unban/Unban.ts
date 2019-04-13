import CommandManager from '../../CommandManager';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Unban extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('Unban', Manager, true, [{ type: String, name: 'SteamID' }]);
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
