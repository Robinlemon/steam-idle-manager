import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class RemoveTag extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('removetag', LanguageDecoder, true, [String, [String]]);

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
                            $each: Tags
                        }
                    }
                }
            );

            SteamClient.chatMessage(
                SteamID64,
                `Revoked ${Tags.length} Tags from ${SteamID}`
            );
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
