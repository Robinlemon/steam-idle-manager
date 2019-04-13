import CommandManager from '../../CommandManager';
import { Levels } from '../../Logger';
import App from '../../Models/App';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Apps extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('Apps', Manager, true);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        try {
            const Documents = await App.count({});
            const Message = this.InterpolateString('AppsResponse', [Documents]);

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
