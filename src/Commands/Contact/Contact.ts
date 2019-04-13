import CommandManager from '../../CommandManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Contact extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('Contact', Manager);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const Message = this.InterpolateString('ContactResponse');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
