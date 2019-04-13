import CommandManager from '../../CommandManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Give extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('Give', Manager, false);
    }

    public Trigger = async (Args: ITriggerArgs): Promise<void> =>
        this.ReflectCommandByIdentifier('Redeem').Trigger(Args);
}
