import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';
import Logger, { Levels } from '../../Logger';
import LanguageDecoder from '../../LanguageDecoder';

export default class Group extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('group', LanguageDecoder);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('GroupDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        SteamClient.chatMessage(SteamID64, 'group msg');
    };
}
