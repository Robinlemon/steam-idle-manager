import CommandManager from '../../CommandManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class SteamID extends BaseCommand {
    constructor(Manager: CommandManager) {
        super('SteamID', Manager, true, [], true);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        SteamClient.chatMessage(
            SteamID64,
            this.InterpolateString('SteamIDResponse', [SteamID64])
        );
    };
}
