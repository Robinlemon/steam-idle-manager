import CommandManager from '../../CommandManager';
import { Levels } from '../../Logger';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class AddTag extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('AddTag', Manager, true, [
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
