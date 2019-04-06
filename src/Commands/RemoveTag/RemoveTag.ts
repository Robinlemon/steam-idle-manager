import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class RemoveTag extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('removetag', LanguageDecoder, true, [
            { type: String, name: 'SteamID' },
            [{ type: String, name: 'Tags' }]
        ]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('RemoveTagDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const [SteamID, ...Tags] = Arguments;

        try {
            await User.findOneAndUpdate(
                {
                    SteamID64: SteamID
                },
                {
                    $pull: {
                        Tags: {
                            $in: Tags
                        }
                    }
                }
            );

            const Message = this.InterpolateString('RemoveTagResponse', [
                Tags.length,
                SteamID
            ]);

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
