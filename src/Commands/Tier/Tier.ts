import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';

export default class Tier extends BaseCommand {
    constructor() {
        super('tier', false, []);
    }

    public Trigger = ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): void => {
        throw new NotImplemented();
    };
}