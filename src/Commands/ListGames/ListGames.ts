import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';
import Logger, { Levels } from '../../Logger';
import App from '../../Models/App';

export default class ListGames extends BaseCommand {
    constructor() {
        super('listgames', '', false, []);
        this.Logger = new Logger(this.constructor.name);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const MyAppInfo = await App.find({
            TotalKeys: {
                $gt: 0
            }
        });

        const Message = MyAppInfo.map(
            AppObj => `(${AppObj.AppID}) ${AppObj.Name}`
        ).join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
