import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import App from '../../Models/App';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';

export default class ClearKeys extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('clearkeys', LanguageDecoder, true);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('ClearKeysDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
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
