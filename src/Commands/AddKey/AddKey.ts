import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';
import App from '../../Models/App';

export default class AddKey extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('addkey', LanguageDecoder, true, [
            { type: Number, name: 'AppID' },
            [
                {
                    type: String,
                    name: 'CD Keys'
                }
            ]
        ]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('AddKeyDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const [AppID, ...Keys] = Arguments;

        try {
            const Document = await App.findOneAndUpdate(
                {
                    AppID: AppID
                },
                {
                    $inc: {
                        TotalKeys: Keys.length
                    },
                    $push: {
                        Keys: {
                            $each: Keys
                        }
                    }
                },
                {
                    new: true
                }
            );

            const IsMany = Keys.length > 1;
            const InterpMessage = this.InterpolateString(
                IsMany ? 'AddKeyResponseMany' : 'AddKeyResponseOne',
                [Keys.length]
            );
            const Message = this.InterpolateString('AddKeyResponse', [
                InterpMessage,
                Document.Name,
                Document.Name,
                Document.TotalKeys
            ]);

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
