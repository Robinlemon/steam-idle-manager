import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';

export default class Ban extends BaseCommand {
    constructor() {
        super('ban', true, ['string']);
    }

    public Trigger = ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): void => {
        throw new NotImplemented();
    };
}
