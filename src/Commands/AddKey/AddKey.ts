import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import App from '../../Models/App';

export default class AddKey extends BaseCommand {
    constructor() {
        super('addkey', '', true, [Number, [String]]);
        this.Logger = new Logger(this.constructor.name);
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
                        TotalKeys: 1
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

            const Message = [
                `Added a key to ${Document.Name}`,
                `${Document.Name} now has ${Document.Keys.length} keys`
            ];

            SteamClient.chatMessage(SteamID64, Message.join('\n'));
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
