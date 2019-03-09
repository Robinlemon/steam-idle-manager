import Retry from 'async-retry';
import Axios from 'axios';
import App from './Models/App';
import { MongoError } from 'mongodb';
import Logger, { Levels } from './Logger';

export interface IAppData {
    applist: {
        apps: [
            {
                appid: number;
                name: string;
            }
        ];
    };
}

export interface ICardData {
    [appid: string]: {
        Name: string;
        Count: number;
        Normal: number;
        Foil: number;
        NormalStock: number;
        FoilStock: number;
    };
}

export default class SteamResourceManager {
    private Logger: Logger;

    constructor() {
        this.Logger = new Logger(this.constructor.name);
    }

    public Start(Interval: number) {
        this.PopulateSteamData();

        setInterval(this.PopulateSteamData, Interval);
    }

    private GetResource = (Address: string) =>
        Retry(
            async () => {
                const Response = await Axios({
                    url: Address,
                    responseType: 'json'
                });

                return Response.data;
            },
            {
                retries: 100,
                onRetry: (Err: Error) => {
                    this.Logger.log({
                        level: Levels.ERROR,
                        message: `${Err}`
                    });
                }
            }
        );

    private PopulateSteamData = async () => {
        this.Logger.log({
            level: Levels.VERBOSE,
            message: `Fetching Steam App Data`
        });

        const AppDataPromise: Promise<any> = this.GetResource(
            `http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json`
        );

        const CardDataPromise: Promise<any> = this.GetResource(
            `http://api.steamcardexchange.net/GetBadgePrices.json`
        );

        const [AppData, CardData]: [IAppData, ICardData] = await Promise.all([
            AppDataPromise,
            CardDataPromise
        ]);

        const AppDocuments = AppData.applist.apps.map(CurrentAppObj => ({
            updateOne: {
                filter: {
                    AppID: CurrentAppObj.appid
                },
                update: {
                    Name: CurrentAppObj.name,
                    ...(CardData[CurrentAppObj.appid.toString()] &&
                        CardData[CurrentAppObj.appid.toString()])
                },
                upsert: true,
                setDefaultsOnInsert: true
            }
        }));

        this.Logger.log({
            level: Levels.VERBOSE,
            message: `Generated App Documents`
        });

        try {
            const Results = await App.bulkWrite(AppDocuments);

            this.Logger.log({
                level: Levels.VERBOSE,
                message: `Updated ${Results.modifiedCount} Apps`
            });
        } catch (Err) {
            this.Logger.log({
                level: Levels.ERROR,
                message: `${Err.stack}`
            });
        }
    };
}
