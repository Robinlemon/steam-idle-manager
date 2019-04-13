import CommandManager from '../../CommandManager';
import LanguageDecoder from '../../LanguageDecoder';
import { Levels } from '../../Logger';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class RemakeUser extends BaseCommand {
    constructor(Manager: CommandManager) {
        super(
            'RemakeUser',
            Manager,
            true,
            [{ type: String, name: 'SteamID', optional: true }],
            true
        );
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const [SteamIDOfUser] = Arguments.length < 1 ? [SteamID64] : Arguments;

        const Record = await User.findOne({
            SteamID64: SteamIDOfUser
        });

        if (Record === null) {
            return SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('UserModelNotFound')
            );
        }

        try {
            await User.deleteOne({
                SteamID64: SteamIDOfUser
            });

            await User.findOneAndUpdate(
                {
                    SteamID64: SteamIDOfUser
                },
                {
                    SteamID64: SteamIDOfUser
                },
                {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                }
            );

            const Message = this.InterpolateString('RemakeUserResponse', [
                SteamIDOfUser
            ]);

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err, Levels.ERROR);

            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('GenericError')
            );
        }
    };
}
