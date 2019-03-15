import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import App from '../../Models/App';
import Logger, { Levels } from '../../Logger';
import LanguageDecoder from '../../LanguageDecoder';

export default class Apps extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('apps', LanguageDecoder, true);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('AppsDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
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
