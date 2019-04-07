import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import LanguageDecoder from '../../LanguageDecoder';
import App from '../../Models/App';
import User from '../../Models/User';

export default class Redeem extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('redeem', LanguageDecoder, false, [
            { type: String, name: 'AppID|Game Name' }
        ]);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('RedeemDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const [AppIDOrName] = Arguments;

        const AppInfo = await App.findOne({
            $or: [
                {
                    Name: AppIDOrName
                },
                {
                    AppID: AppIDOrName
                }
            ]
        });

        const UserInfo = await User.findOne({
            SteamID64
        });

        if (UserInfo === null) {
            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('UserModelInvalid')
            );
            SteamClient.removeFriend(SteamID64);
        }

        const Allowed = UserInfo.GetTier().GamesAllowed;
        const GamesTaken = UserInfo.Owe.reduce(
            (Count, Record) => Count + Record.InstancesTaken,
            0
        );
        const Difference = Allowed - GamesTaken;

        if (Difference <= 0) {
            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('RedeemResponseNotEligible')
            );
            return;
        }

        if (AppInfo === null) {
            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('RedeemResponseNoMatch')
            );
            return;
        }

        if (AppInfo.TotalKeys === 0) {
            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('RedeemResponseNoStock')
            );
            return;
        }

        try {
            await App.updateOne(
                {
                    AppID: AppInfo.AppID
                },
                {
                    $inc: {
                        TotalKeys: -1
                    },
                    $pop: {
                        Keys: -1
                    }
                }
            );

            /**
             * @todo
             * Update records for existing games
             */

            await User.updateOne(
                {
                    SteamID64
                },
                {
                    DoesOwe: true,
                    $push: {
                        Owe: {
                            AppID: App.AppID,
                            InstancesTaken: 1,
                            TotalCardsRequired: Math.ceil(App.Count / 2),
                            CardsGiven: 0
                        }
                    }
                }
            );

            const Message = this.InterpolateString('RedeemResponse', [
                this.InterpolateString('RedeemAllResponseIter', [
                    App.AppID,
                    App.Name,
                    App.Keys[0]
                ])
            ]);

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err, Levels.ERROR);

            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('GenericError')
            );
        }
    };
}
