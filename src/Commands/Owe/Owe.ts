import { InstanceType } from 'typegoose';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';
import App, { App as AppClass } from '../../Models/App';
import User from '../../Models/User';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Owe extends BaseCommand {
    constructor(Decoder: LanguageDecoder) {
        super('Owe', Decoder);
    }

    public Trigger = async ({
        SteamClient,
        SteamID64
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

        const Records = await App.find({
            AppID: {
                $in: AppIDsToGetGameInfoFor
            }
        });

        const KeyToRecordMap = Records.reduce(
            (Data, CurrentRecord) => {
                Data[CurrentRecord.AppID.toString()] = CurrentRecord;
                return Data;
            },
            {} as { [appid: string]: InstanceType<AppClass> }
        );

        const Iterations = UserRecord.Owe.map(CurrentOwe =>
            this.InterpolateString('OweResponseIter', [
                KeyToRecordMap[CurrentOwe.AppID.toString()].Name,
                CurrentOwe.AppID,
                CurrentOwe.InstancesTaken * CurrentOwe.CardsRequired -
                    CurrentOwe.CardsGiven
            ])
        );

        const Message = [
            this.InterpolateString('OweResponse'),
            ...Iterations
        ].join('\n');

        SteamClient.chatMessage(SteamID64, Message);
    };
}
