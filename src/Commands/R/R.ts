import CommandManager from '../../CommandManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class R extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('R', Manager, false);
    }

    public Trigger = async (Args: ITriggerArgs): Promise<void> =>
        this.ReflectCommandByIdentifier('Redeem').Trigger(Args);
}
