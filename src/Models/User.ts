import { instanceMethod, InstanceType, prop, Typegoose } from 'typegoose';
import TierResolver, { ITier } from './Tier';

interface IHistory {
    AppID: number;
    Count: number;
}

interface IOwe {
    AppID: number;
    InstancesTaken: number;
    CardsRequired: number;
    CardsGiven: number;
}

class User extends Typegoose {
    @prop({ required: true })
    public SteamID64: string;

    @prop({ required: true, default: 0 })
    public GamesIdled: number;

    @prop({ required: true, default: false })
    public Banned: boolean;

    @prop({ required: true, default: Date.now() })
    public LastActive: number;

    @prop({ required: true, default: [] })
    public Tags: string[];

    @prop({ required: true, default: [] })
    public History: IHistory[];

    @prop({ required: true, default: [] })
    public Owe: IOwe[];

    @prop({ required: true, default: false })
    public DoesOwe: boolean;

    @instanceMethod
    public GetTier(this: InstanceType<User>): ITier {
        return TierResolver(this.GamesIdled);
    }

    @instanceMethod
    public UpdateInteraction(this: InstanceType<User>) {
        this.LastActive = Date.now();
        this.save();
    }
}

export default new User().getModelForClass(User);
