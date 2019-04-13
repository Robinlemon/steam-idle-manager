import CommandManager from '../../CommandManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class RAll extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('RAll', Manager, false);
    }

    public Trigger = async (Args: ITriggerArgs): Promise<void> =>
        this.ReflectCommandByIdentifier('RedeemAll').Trigger(Args);
}
