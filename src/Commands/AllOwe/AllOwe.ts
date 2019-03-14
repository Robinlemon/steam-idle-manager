import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';

export default class AllOwe extends BaseCommand {
    constructor() {
        super('allowe', '', true, []);
        this.Logger = new Logger(this.constructor.name);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const Records = await User.find({
            DoesOwe: true
        });

        const Message = Records.map(({ SteamID64 }) => SteamID64).join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
