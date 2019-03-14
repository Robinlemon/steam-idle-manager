import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';

export default class Contact extends BaseCommand {
    constructor() {
        super('contact', '');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        SteamClient.chatMessage(SteamID64, `Contact me -> lol`);
    };
}
