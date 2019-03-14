import { prop, Typegoose } from 'typegoose';

export class App extends Typegoose {
    constructor(...Args: any[]) {
        super();
    }

    @prop({ required: true })
    AppID: number;

    @prop({ required: true })
    Name: string;

    @prop({ required: true, default: [] })
    Keys: string[];

    @prop({ required: true, default: 0 })
    TotalKeys: number;

    @prop({})
    Count?: number;

    @prop({})
    Normal?: number;

    @prop({})
    Foil?: number;

    @prop({})
    NormalStock?: number;

    @prop({})
    FoilStock?: number;
}

export default new App().getModelForClass(App);
