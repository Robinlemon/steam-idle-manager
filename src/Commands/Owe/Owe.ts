import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';
import AppModel from '../../Models/App';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Owe extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Owe', Decoder);
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

        if (UserRecord.Owe.length === 0) {
            return SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('OweResponseZero')
            );
        }

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
            ...UserRecord.Owe.map(({ AppID, CardsRequired, CardsGiven }) =>
                this.InterpolateString('OweResponseIter', [
                    KeyToRecordMap[AppID],
                    AppID,
                    CardsRequired - CardsGiven
                ])
            )
        ].join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
