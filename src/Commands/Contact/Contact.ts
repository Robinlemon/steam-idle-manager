import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import LanguageDecoder from '../../LanguageDecoder';

export default class Contact extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('contact', LanguageDecoder);

        this.Description = this.InterpolateString('ContactDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        SteamClient.chatMessage(SteamID64, `Contact me -> lol`);
    };
}
