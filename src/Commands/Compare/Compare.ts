import LanguageDecoder from '../../LanguageDecoder';
import App from '../../Models/App';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Compare extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Compare', Decoder);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
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
