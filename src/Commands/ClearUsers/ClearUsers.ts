import CommandManager from '../../CommandManager';
import { Levels } from '../../Logger';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class ClearUsers extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('ClearUsers', Manager, true);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        try {
            const Data = await User.deleteMany({});
            const Removed = Data.n;

            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('ClearUsersResponse', [Removed])
            );
        } catch (Err) {
            this.Logger.log(Err, Levels.ERROR);
            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('GenericError')
            );
        }
    };
}
