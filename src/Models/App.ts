import { prop, Typegoose } from 'typegoose';

class App extends Typegoose {
    constructor(...Args: any[]) {
        super();
    }

    @prop({ required: true })
    AppID: number;

    @prop({ required: true })
    Name: string;

    @prop({ required: true })
    Count: number;

    @prop({ required: true })
    Normal: number;

    @prop({ required: true })
    Foil: number;

    @prop({ required: true })
    NormalStock: number;

    @prop({ required: true })
    FoilStock: number;
}

export default new App().getModelForClass(App);
