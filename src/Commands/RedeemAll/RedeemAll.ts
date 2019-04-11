import LanguageDecoder from '../../LanguageDecoder';
import { Levels } from '../../Logger';
import App from '../../Models/App';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class RedeemAll extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('RedeemAll', Decoder);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
    }: ITriggerArgs): Promise<void> => {
        const MyAppInfo = await App.find({
            TotalKeys: {
                $gt: 0
            }
        });

        const UserInfo = await User.findOne({
            SteamID64
        });

        if (UserInfo == null) {
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

        if (MyAppInfo.length === 0) {
            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('RedeemResponseNoMatch')
            );
            return;
        }

        const SortedByQuantity = MyAppInfo.sort(
            (App1, App2) => App2.TotalKeys - App1.TotalKeys
        );

        const WeCanGive = Math.min(MyAppInfo.length, Difference);
        const Restricted = this.RestrictArray(SortedByQuantity, WeCanGive);

        try {
            const AppDocuments = Restricted.map(CurrentAppObj => ({
                updateOne: {
                    filter: {
                        AppID: CurrentAppObj.AppID
                    },
                    update: {
                        $inc: {
                            TotalKeys: -1
                        },
                        $pop: {
                            Keys: -1
                        }
                    }
                }
            }));

            await App.bulkWrite(AppDocuments);

            /**
             * @todo
             * Update records for existing games
             */
            const AppOwe = Restricted.map(CurrentApp => ({
                AppID: CurrentApp.AppID,
                InstancesTaken: 1,
                CardsRequired: Math.ceil(CurrentApp.Count / 2),
                CardsGiven: 0
            }));

            await User.updateOne(
                {
                    SteamID64
                },
                {
                    DoesOwe: true,
                    $push: {
                        Owe: {
                            $each: AppOwe
                        }
                    }
                }
            );

            const Message = [
                this.InterpolateString('RedeemAllResponse', [WeCanGive]),
                ...Restricted.map(CurrentApp =>
                    this.InterpolateString('RedeemAllResponseIter', [
                        CurrentApp.AppID,
                        CurrentApp.Name,
                        CurrentApp.Keys[0]
                    ])
                )
            ].join('\n');

            SteamClient.chatMessage(SteamID64, Message);
        } catch (Err) {
            this.Logger.log(Err, Levels.ERROR);

            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('GenericError')
            );
        }
    };

    private RestrictArray = <T>(Original: T[], Len: number): T[] => {
        if (Len === Original.length) {
            return Original;
        }
        if (Len > Original.length || Len < 1) {
            throw new Error('IndexOutOfBounds');
        }
        return Original.slice(0, Len);
    };
}
