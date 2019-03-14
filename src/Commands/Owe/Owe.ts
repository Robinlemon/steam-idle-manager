import BaseCommand, { ITriggerArgs } from '../BaseCommand';
import Logger, { Levels } from '../../Logger';
import { InstanceType } from 'typegoose';
import User from '../../Models/User';
import AppModel from '../../Models/App';

export default class Owe extends BaseCommand {
    constructor() {
        super('owe', '');
        this.Logger = new Logger(this.constructor.name);
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
            SteamClient.chatMessage(SteamID64, 'Try readding me');
            return;
        }

        if (UserRecord.Owe.length === 0) {
            SteamClient.chatMessage(SteamID64, `You don't owe anything :`);
            return;
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

        const Message = UserRecord.Owe.map(
            ({ AppID, TotalCardsRequired, CardsGiven }) => {
                const GameName = KeyToRecordMap[AppID];
                const Difference = TotalCardsRequired - CardsGiven;

                return `${GameName} (${AppID}): ${Difference}`;
            }
        );

        SteamClient.chatMessage(SteamID64, `You owe:\n${Message.join('\n')}`);
    };
}
