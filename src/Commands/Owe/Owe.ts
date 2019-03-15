import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import AppModel from '../../Models/App';
import LanguageDecoder from '../../LanguageDecoder';

export default class Owe extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('owe', LanguageDecoder);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('OweDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments
    }: ITriggerArgs): Promise<void> => {
        const UserRecord = await User.findOne({
            SteamID64
        });

        if (UserRecord === null || UserRecord.Owe === null) {
            this.Logger.log(`${SteamID64} User Obj doesnt exist`, Levels.ERROR);

            return SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('UserModelInvalid')
            );
        }

        if (UserRecord.Owe.length === 0)
            return SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('OweResponseZero')
            );

        const AppIDsToGetGameInfoFor = UserRecord.Owe.map(
            OweObj => OweObj.AppID
        );

        const Records = await AppModel.find({
            AppID: {
                $in: AppIDsToGetGameInfoFor
            }
        });

        const KeyToRecordMap = Records.reduce((Data: any, CurrentRecord) => {
            Data[CurrentRecord.AppID] = CurrentRecord;
            return Data;
        }, {});

        const Message = [
            this.InterpolateString('OweResponse'),
            ...UserRecord.Owe.map(({ AppID, TotalCardsRequired, CardsGiven }) =>
                this.InterpolateString('OweResponseIter', [
                    KeyToRecordMap[AppID],
                    AppID,
                    TotalCardsRequired - CardsGiven
                ])
            )
        ].join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
