import CommandManager from '../../CommandManager';
import { Levels } from '../../Logger';
import App from '../../Models/App';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class ClearKeys extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('ClearKeys', Manager, true);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        try {
            const Data = await App.updateMany(
                {},
                {
                    Keys: [],
                    TotalKeys: 0
                }
            );

            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('ClearKeysResponse')
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
