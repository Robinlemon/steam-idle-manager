import LanguageDecoder from '../../LanguageDecoder';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Contact extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Contact', Decoder);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const Message = this.InterpolateString('ContactResponse');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
