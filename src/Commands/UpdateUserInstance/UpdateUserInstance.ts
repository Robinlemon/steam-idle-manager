import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';

export default class UpdateUserInstance extends BaseCommand {
    constructor() {
        super(
            'updateuserinstance',
            'Upserts an InstanceType<User> for the given SteamID64',
            true,
            [String]
        );
        this.Logger = new Logger(this.constructor.name);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const [SteamIDToUpdate] = Arguments;

        try {
            const Result = await User.findOneAndUpdate(
                {
                    SteamID64: SteamIDToUpdate
                },
                {},
                { new: true, setDefaultsOnInsert: true }
            );

            if (Result === null) {
                this.Logger.log(
                    `Error finding ${SteamIDToUpdate}`,
                    Levels.ERROR
                );
                SteamClient.chatMessage(
                    SteamID64,
                    `Error updating ${SteamIDToUpdate}`
                );

                return;
            }

            SteamClient.chatMessage(
                SteamID64,
                `Successfully updated ${SteamIDToUpdate}`
            );
        } catch (Err) {
            this.Logger.log((Err as Error).stack, Levels.ERROR);
        }
    };
}
