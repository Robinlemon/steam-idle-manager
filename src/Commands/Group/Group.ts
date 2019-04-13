import CommandManager from '../../CommandManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Group extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('Group', Manager);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        const Message = this.InterpolateString('GroupResponse', [
            'IdleFreaksVIP'
        ]);

        SteamClient.chatMessage(SteamID64, Message);
    };
}
