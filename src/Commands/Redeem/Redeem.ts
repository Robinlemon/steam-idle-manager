import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';
import Logger, { Levels } from '../../Logger';
import LanguageDecoder from '../../LanguageDecoder';

export default class Redeem extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('redeem', LanguageDecoder);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('RedeemDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        throw new NotImplemented();
    };
}
