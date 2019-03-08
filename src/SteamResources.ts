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

    private GetResource = async (Address: string) => {
        await Retry(
            async Bail => {
                const Response = await Axios({
                    url: Address,
                    responseType: 'json'
                });

                return Response.data;
            },
            {
                retries: 100
            }
        );
    };

    private PopulateSteamData = async () => {
        const AppDataPromise: Promise<any> = this.GetResource(
            `http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json`
        );

        const CardDataPromise: Promise<any> = this.GetResource(
            `http://api.steamcardexchange.net/GetBadgePrices.json`
        );

        const [AppData, CardData] = await Promise.all<IAppData, ICardData>([
            AppDataPromise,
            CardDataPromise
        ]);

        AppData.applist.apps.forEach(CurrentAppObj => {
            const { appid: AppID, name: Name } = CurrentAppObj;
            const { Count, Normal, Foil, NormalStock, FoilStock } = CardData[
                AppID.toString()
            ];

            App.findOneAndUpdate(
                {
                    AppID
                },
                {
                    Name,
                    Count,
                    Normal,
                    Foil,
                    NormalStock,
                    FoilStock
                },
                { upsert: true, new: true, setDefaultsOnInsert: true },
                (Err: MongoError, Result: InstanceType<any & typeof App>) => {
                    if (Err)
                        return this.Logger.log({
                            level: Levels.ERROR,
                            message: `${Err}`
                        });

                    return this.Logger.log({
                        level: Levels.VERBOSE,
                        message: `Updated App ${AppID} - ${Name}`
                    });
                }
            );
        });
    };
}
