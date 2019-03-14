import Retry from 'async-retry';
import Axios, { AxiosRequestConfig } from 'axios';
import Logger, { Levels } from './Logger';

export default class SteamAPIManager {
    private APIKey: string;
    private Logger: Logger;

    private APIRef = 'https://api.steampowered.com/';

    constructor(APIKey: string) {
        this.APIKey = APIKey;
        this.Logger = new Logger(this.constructor.name);
    }

    public GetGamesForSteamID64 = (SteamID64: string): Promise<number[]> => {
        const Endpoint = '/IPlayerService/GetOwnedGames/v1/';
        const Params = `?key=${this.APIKey}&steamid=${SteamID64}`;
        const ResourceURL = this.APIRef + Endpoint + Params;

        const Config: AxiosRequestConfig = {
            url: ResourceURL,
            responseType: 'json'
        };

        return Retry(
            async () => {
                const Response = await Axios(Config);

                return Response.data.response.games.map(
                    (GameObj: { appid: number; playtime_forever: number }) =>
                        GameObj.appid
                );
            },
            {
                retries: 100,
                onRetry: (Err: Error) =>
                    this.Logger.log(Err.stack, Levels.ERROR)
            }
        );
    };
}
