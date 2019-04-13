import CommandManager from '../../CommandManager';
import { Levels } from '../../Logger';
import App from '../../Models/App';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class AddKey extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('AddKey', Manager, true, [
            { type: Number, name: 'AppID' },
            [
                {
                    type: String,
                    name: 'CD Keys'
                }
            ]
        ]);
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
                    AppID
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
