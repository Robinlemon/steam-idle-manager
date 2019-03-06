import { prop, instanceMethod, Typegoose, InstanceType } from 'typegoose';

class User extends Typegoose {
    constructor(...Args: any[]) {
        super();
    }

    @prop({ required: true })
    SteamID64: string;

    @prop({ required: true, default: 'test' })
    Tier: any;

    @prop({ required: true, default: false })
    Banned: boolean;

    @prop({ required: true, default: Date.now() })
    LastActive: number;

    @instanceMethod
    UpdateInteraction(this: InstanceType<User>) {
        this.LastActive = Date.now();
        this.save();
    }
}

export default new User().getModelForClass(User);
