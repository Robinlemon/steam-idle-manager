import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import App from '../../Models/App';
import Logger, { Levels } from '../../Logger';

export default class Apps extends BaseCommand {
    constructor() {
        super('apps', true, []);
        this.Logger = new Logger(this.constructor.name);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        try {
            const Documents = await App.count({});

            SteamClient.chatMessage(
                SteamID64,
                `We have information for ${Documents} apps`
            );
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
