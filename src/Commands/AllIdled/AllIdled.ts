import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';

export default class AllIdled extends BaseCommand {
    constructor() {
        super(
            'allidled',
            'Gives you a list of all the SteamIDs that has idled games and returned cards',
            true,
            []
        );
        this.Logger = new Logger(this.constructor.name);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const Records = await User.find({
            History: {
                Count: {
                    $gt: 0
                }
            }
        });

        const Message = Records.map(
            ({ SteamID64, GamesIdled }) => `${SteamID64} -> ${GamesIdled}`
        ).join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
