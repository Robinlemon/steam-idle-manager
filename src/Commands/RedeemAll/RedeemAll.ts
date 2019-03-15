import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';
import Logger, { Levels } from '../../Logger';
import LanguageDecoder from '../../LanguageDecoder';

export default class RedeemAll extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('redeemall', LanguageDecoder);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('RedeemAllDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        throw new NotImplemented();
    };
}
