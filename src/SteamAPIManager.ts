import Retry from 'async-retry';
import Axios, { AxiosRequestConfig } from 'axios';
import Logger, { Levels } from './Logger';

export default class SteamAPIManager {
    private APIKey: string;
    private SteamCommunityInstance: any;
    private Logger: Logger;

    private APIRef = 'https://api.steampowered.com/';

    constructor(APIKey: string, SteamCommunityInstance: any) {
        this.APIKey = APIKey;
        this.SteamCommunityInstance = SteamCommunityInstance;
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

    public GetGroupMembershipStatuses = (
        SteamID64s: string[],
        GroupID64: string
    ): Promise<{ [SteamID64: string]: boolean }> =>
        new Promise(Resolve => {
            this.SteamCommunityInstance.getGroupMembers(
                GroupID64,
                (Err: Error | null, Members: string[]) => {
                    if (Err) {
                        this.Logger.log(Err, Levels.ERROR);
                        this.Logger.log(
                            `Couldn't fetch group members for ${GroupID64}`,
                            Levels.WARN
                        );

                        Resolve({});
                        return;
                    }

                    const StatusMap = SteamID64s.reduce(
                        (
                            Accumulator: { [SteamID64: string]: boolean },
                            SteamID64: string
                        ) => {
                            Accumulator[SteamID64] = Members.includes(
                                SteamID64.toString()
                            );

                            return Accumulator;
                        },
                        {}
                    );

                    Resolve(StatusMap);
                }
            );
        });

    public IsInGroup = (
        SteamID64: string,
        GroupID64: string
    ): Promise<boolean> =>
        new Promise(Resolve => {
            this.SteamCommunityInstance.getGroupMembers(
                GroupID64,
                (Err: Error | null, Members: string[]) => {
                    if (Err) {
                        this.Logger.log(Err.stack, Levels.ERROR);
                        this.Logger.log(
                            `Couldn't fetch group members for ${GroupID64}`
                        );

                        Resolve(false);
                        return;
                    }

                    Resolve(Members.includes(SteamID64.toString()));
                }
            );
        });
}
