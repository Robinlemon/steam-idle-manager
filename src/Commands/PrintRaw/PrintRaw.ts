import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';

export default class PrintRaw extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('printraw', LanguageDecoder, true, [String]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('PrintRawDescription');
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

        if (Record === null)
            return SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('UserModelInvalid')
            );

        const Message = this.InterpolateString('PrintRawResponse', [
            JSON.stringify(Record, null, 0)
        ]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
