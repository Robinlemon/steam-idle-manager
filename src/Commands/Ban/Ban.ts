import LanguageDecoder from '../../LanguageDecoder';
import { Levels } from '../../Logger';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Ban extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Ban', Decoder, true, [{ type: String, name: 'SteamID' }]);
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
