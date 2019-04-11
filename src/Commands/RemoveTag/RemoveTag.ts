import LanguageDecoder from '../../LanguageDecoder';
import { Levels } from '../../Logger';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class RemoveTag extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('RemoveTag', Decoder, true, [
            { type: String, name: 'SteamID' },
            [{ type: String, name: 'Tags' }]
        ]);
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
