import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';

export default class PrintRawUserRecord extends BaseCommand {
    constructor() {
        super(
            'printrawuserrecord',
            'Prints the raw JSON of a User model',
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
        const [SteamIDOfUser] = Arguments;

        const Record = await User.findOne({
            SteamID64: SteamIDOfUser
        });

        if (Record === null) {
            SteamClient.chatMessage(SteamID64, 'User does not exist.');
            return;
        }

        SteamClient.chatMessage(SteamID64, JSON.stringify(Record, null, 0));
    };
}
