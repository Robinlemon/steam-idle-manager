import { prop, Typegoose } from 'typegoose';

export class App extends Typegoose {
    @prop({ required: true })
    public AppID: number;

    @prop({ required: true })
    public Name: string;

    @prop({ required: true, default: [] })
    public Keys: string[];

    @prop({ required: true, default: 0 })
    public TotalKeys: number;

    @prop({})
    public Count?: number;

    @prop({})
    public Normal?: number;

    @prop({})
    public Foil?: number;

    @prop({})
    public NormalStock?: number;

    @prop({})
    public FoilStock?: number;
}

export default new App().getModelForClass(App);
