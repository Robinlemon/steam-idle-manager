import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';

export default class Offer extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('Offer', LanguageDecoder, true);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('OfferDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        throw new NotImplemented();
    };
}
