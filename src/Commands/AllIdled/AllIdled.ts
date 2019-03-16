import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class AllIdled extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('allidled', LanguageDecoder, true, []);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('AllIdledDescription');
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

        const Message = Records.map(({ SteamID64, GamesIdled }) =>
            this.InterpolateString('AllIdledResponse', [SteamID64, GamesIdled])
        ).join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
