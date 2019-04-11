import LanguageDecoder from '../../LanguageDecoder';
import { Levels } from '../../Logger';
import App from '../../Models/App';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Stock extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Stock', Decoder);
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
