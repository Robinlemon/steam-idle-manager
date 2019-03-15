import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';
import Logger, { Levels } from '../../Logger';
import LanguageDecoder from '../../LanguageDecoder';

export default class Ban extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('ban', LanguageDecoder, true, [String]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('BanDescription');
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

            const Message = this.InterpolateString('BanResponse', [ToBan]);

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
