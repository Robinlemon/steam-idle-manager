import LanguageDecoder from '../../LanguageDecoder';
import { Levels } from '../../Logger';
import App from '../../Models/App';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Apps extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Apps', Decoder, true);
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
