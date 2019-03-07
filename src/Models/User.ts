import { prop, instanceMethod, Typegoose, InstanceType } from 'typegoose';
import TierResolver, { ITier } from './Tier';
import { Tag } from './Tag';

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
    Tag: Tag[];

    @prop()
    get Tier(): ITier {
        return TierResolver(this.GamesIdled);
    }

    @instanceMethod
    UpdateInteraction(this: InstanceType<User>) {
        this.LastActive = Date.now();
        this.save();
    }
}

export default new User().getModelForClass(User);
