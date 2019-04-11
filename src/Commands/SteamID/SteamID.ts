import LanguageDecoder from '../../LanguageDecoder';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class SteamID extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('SteamID', Decoder, true, [], true);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        SteamClient.chatMessage(
            SteamID64,
            this.InterpolateString('SteamIDResponse', [SteamID64])
        );
    };
}
