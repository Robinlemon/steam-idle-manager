import CommandManager from '../../CommandManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class GiveAll extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('GiveAll', Manager, false);
    }

    public Trigger = async (Args: ITriggerArgs): Promise<void> =>
        this.ReflectCommandByIdentifier('RedeemAll').Trigger(Args);
}
