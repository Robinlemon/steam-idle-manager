import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';
import Logger, { Levels } from '../../Logger';

export default class Ban extends BaseCommand {
    constructor() {
        super('ban', true, [String]);
        this.Logger = new Logger(this.constructor.name);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const [ToBan] = Arguments;

        try {
            await User.findOneAndUpdate(
                {
                    SteamID64: ToBan
                },
                {
                    Banned: true
                }
            );

            SteamClient.chatMessage(SteamID64, `User ${ToBan} is now banned`);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
