import LanguageDecoder from '../../LanguageDecoder';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class PrintRaw extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super(
            'PrintRaw',
            Decoder,
            true,
            [{ type: String, name: 'SteamID' }],
            true
        );
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
            return SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('UserModelNotFound')
            );
        }

        const Message = this.InterpolateString('PrintRawResponse', [
            JSON.stringify(Record, null, 0)
        ]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
