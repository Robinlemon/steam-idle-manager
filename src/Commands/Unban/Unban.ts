import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import { NotImplemented } from '../../Errors';

export default class Unban extends BaseCommand {
    constructor() {
        super('unban', false, []);
    }

    public Trigger = ({
        SteamClient,
        SteamID64,
        Arguments,
    }: ITriggerArgs): void => {
        throw new NotImplemented();
    };
}