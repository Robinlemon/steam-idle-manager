import BaseCommand, { ITriggerArgs } from './BaseCommand';
import Logger, { Levels } from './../Logger';
import LanguageDecoder from './../LanguageDecoder';

export default class HelpCommand extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('help', LanguageDecoder, false, [
            {
                name: 'a',
                type: 'expression',
                optional: true,
                linuxStyle: true
            }
        ]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('HelpDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {};
}
