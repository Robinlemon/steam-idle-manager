import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class AllOwe extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('allowe', LanguageDecoder, true);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('AddOweDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const Records = await User.find({
            DoesOwe: true
        });

        const Message = Records.map(({ SteamID64 }) =>
            this.InterpolateString('AddOweResponse', [SteamID64])
        ).join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
