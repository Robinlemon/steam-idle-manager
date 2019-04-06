import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class AddTag extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('addtag', LanguageDecoder, true, [
            { type: String, name: 'SteamID' },
            [{ type: String, name: 'Tags' }]
        ]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('AddTagDescription');
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
                    $push: {
                        Tags: {
                            $each: Tags
                        }
                    }
                }
            );

            const Count = Tags.length;
            const Message = this.InterpolateString(
                'AddTagResponse' + (Count > 1 ? 'Many' : 'One'),
                [Count.toString(), SteamID]
            );

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
