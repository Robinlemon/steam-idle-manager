import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import App from '../../Models/App';
import LanguageDecoder from '../../LanguageDecoder';

export default class Compare extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('compare', LanguageDecoder);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('CompareDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments,
        SteamAPIManager
    }: ITriggerArgs): Promise<void> => {
        const MyAppIDsPromise = App.find({
            TotalKeys: {
                $gt: 0
            }
        });

        const TheirAppIDsPromise = SteamAPIManager.GetGamesForSteamID64(
            SteamID64
        );

        const [MyAppInfo, TheirAppIDs] = await Promise.all([
            MyAppIDsPromise,
            TheirAppIDsPromise
        ]);

        const ApplicableGames = MyAppInfo.filter(
            AppObj => !TheirAppIDs.includes(AppObj.AppID)
        );

        if (ApplicableGames.length > 0) {
            const Message = [
                this.InterpolateString('CompareResponse'),
                ...ApplicableGames.map(AppObj =>
                    this.InterpolateString('CompareResponseIter', [AppObj.Name])
                )
            ].join('\n');

            SteamClient.chatMessage(SteamID64, Message);
        } else {
            const Message = this.InterpolateString('CompareResponseZero');

            SteamClient.chatMessage(SteamID64, Message);
        }
    };
}
