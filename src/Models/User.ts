import { prop, instanceMethod, Typegoose, InstanceType } from 'typegoose';
import TierResolver, { ITier } from './Tier';

interface IHistory {
    AppID: number;
    Count: number;
}

interface IOwe {
    AppID: number;
    InstancesTaken: number;
    TotalCardsRequired: number;
    CardsGiven: number;
}

class User extends Typegoose {
    @prop({ required: true })
    SteamID64: string;

    @prop({ required: true, default: 0 })
    GamesIdled: number;

    @prop({ required: true, default: false })
    Banned: boolean;

    @prop({ required: true, default: Date.now() })
    LastActive: number;

    @prop({ required: true, default: [] })
    Tags: string[];

    @prop({ required: true, default: [] })
    History: IHistory[];

    @prop({ required: true, default: [] })
    Owe: IOwe[];

    @prop({ required: true, default: false })
    DoesOwe: boolean;

    @instanceMethod
    GetTier(this: InstanceType<User>): ITier {
        return TierResolver(this.GamesIdled);
    }

    @instanceMethod
    UpdateInteraction(this: InstanceType<User>) {
        this.LastActive = Date.now();
        this.save();
    }
}

export default new User().getModelForClass(User);
