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
        this.Logger.log(`Steam Resource Manager Initialised`, Levels.VERBOSE);
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
                    this.Logger.log(Err.stack, Levels.ERROR);
                }
            }
        );

    private PopulateSteamData = async () => {
        this.Logger.log(`Fetching Steam App Data`, Levels.VERBOSE);

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

        this.Logger.log(`Generated App Documents`, Levels.VERBOSE);

        try {
            const Results = await App.bulkWrite(AppDocuments);

            this.Logger.log(
                `Updated ${Results.modifiedCount} Apps`,
                Levels.VERBOSE
            );
        } catch (Err) {
            this.Logger.log(Err.stack, Levels.ERROR);
        }
    };
}
