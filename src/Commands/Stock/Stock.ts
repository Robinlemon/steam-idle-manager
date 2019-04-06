import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import App from '../../Models/App';
import LanguageDecoder from '../../LanguageDecoder';

export default class Stock extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('stock', LanguageDecoder);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('StockDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        try {
            const MyAppInfo = await App.find({
                TotalKeys: {
                    $gt: 0
                }
            });

            const Message = MyAppInfo.map(AppObj =>
                this.InterpolateString('StockResponse', [
                    AppObj.AppID,
                    AppObj.Name,
                    MyAppInfo[0].TotalKeys
                ])
            ).join('\n');

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
