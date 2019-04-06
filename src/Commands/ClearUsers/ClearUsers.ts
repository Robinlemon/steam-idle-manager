import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import User from '../../Models/User';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';

export default class ClearUsers extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('clearusers', LanguageDecoder, true);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('ClearUsersDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        try {
            const Data = await User.deleteMany({});
            const Removed = Data.n;

            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('ClearUsersResponse', [Removed])
            );
        } catch (Err) {
            this.Logger.log(Err, Levels.ERROR);
            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('GenericError')
            );
        }
    };
}
