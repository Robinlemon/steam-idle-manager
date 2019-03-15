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

        if (ApplicableGames.length > 0)
            SteamClient.chatMessage(
                SteamID64,
                ApplicableGames.map(
                    AppObj =>
                        `You are eligible for the following games:\n> ${
                            AppObj.Name
                        }`
                ).join('\n')
            );
        else
            SteamClient.chatMessage(
                SteamID64,
                `Sorry we dont have any games available for you.`
            );
    };
}
