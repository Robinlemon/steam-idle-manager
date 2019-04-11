import LanguageDecoder from '../../LanguageDecoder';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Group extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('Group', LanguageDecoder);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        const Message = this.InterpolateString('GroupResponse', [
            'IdleFreaksVIP'
        ]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
