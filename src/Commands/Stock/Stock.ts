import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import App from '../../Models/App';

export default class Stock extends BaseCommand {
    constructor() {
        super('stock', '', false, []);
        this.Logger = new Logger(this.constructor.name);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        try {
            const Records = await App.find({
                TotalKeys: { $gt: 0 }
            });

            if (Records.length === 0)
                return SteamClient.chatMessage(
                    SteamID64,
                    `We dont have any keys in stock.`
                );

            const Message = Records.map(
                Record => `${Record.Name}: ${Record.TotalKeys}`
            );

            SteamClient.chatMessage(SteamID64, Message.join('\n'));
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
