import { prop, instanceMethod, Typegoose, InstanceType } from 'typegoose';
import TierResolver, { ITier } from './Tier';

export interface IOwe {
    [AppID: number]: number;
}

class User extends Typegoose {
    constructor(...Args: any[]) {
        super();
    }

    @prop({ required: true })
    SteamID64: string;

    @prop({ required: true, default: 0 })
    GamesIdled: number;

    @prop({ required: true, default: false })
    Banned: boolean;

    @prop({ required: true, default: Date.now() })
    LastActive: number;

    @prop({ required: true, default: [] })
    Tag: string[];

    @prop({ required: true, default: {} })
    Owe: IOwe;

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
