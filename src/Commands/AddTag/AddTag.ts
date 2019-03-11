import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';

export default class AddTag extends BaseCommand {
    constructor() {
        super('addtag', true, [String, [String]]);
        this.Logger = new Logger(this.constructor.name);
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

            SteamClient.chatMessage(
                SteamID64,
                `Gave ${Tags.length} Tags to ${SteamID}`
            );
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
