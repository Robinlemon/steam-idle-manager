import { MongoError } from 'mongodb';
import Mongoose from 'mongoose';
import Logger, { Levels } from './Logger';

export default class MongooseConnection {
    private ConnectionString: string;
    private Logger: Logger;
    private Connection: typeof Mongoose;

    constructor(ConnectionString: string) {
        this.ConnectionString = ConnectionString;
        this.Logger = new Logger(this.constructor.name);
    }

    public Initialise = async () => {
        await this.Connect();

        Mongoose.connection.on('error', (Err: MongoError) => {
            this.Logger.log(Err.stack, Levels.ERROR);
        });

        Mongoose.connection.on('timeout', (Err: MongoError) => {
            this.Logger.log(Err.stack, Levels.ERROR);
            this.Connect();
        });

        Mongoose.connection.on('close', (Err: MongoError) => {
            this.Logger.log(Err.stack, Levels.ERROR);
            this.Connect();
        });
    };

    private Connect = async (): Promise<void> => {
        try {
            await Mongoose.connect(this.ConnectionString, {
                useNewUrlParser: true,
                autoReconnect: true
            });

            this.Logger.log('Connected to MongoDB', Levels.INFO);
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
