import Retry from 'async-retry';
import Axios, { AxiosRequestConfig } from 'axios';
import Logger, { Levels } from './Logger';
import { EConfirmationMethod, ETradeOfferState } from './SteamEnums';

export interface ICEconItemTag {
    internal_name: string;
    name: string;
    category: string;
    color: string;
    category_name: string;
}

export interface ICEconItemDescription {
    type?: string;
    value: string;
}

export interface ICEconItem {
    id: number;
    assetid: number;
    contextid: number;
    appid: number;
    classid: number;
    instanceid: number;
    amount: number;
    pos: number;
    name: string;
    market_hash_name: string;
    name_color: string;
    background_color: string;
    market_fee_app: number;
    type: string;
    tradable: boolean;
    marketable: boolean;
    commodity: boolean;
    market_tradable_restriction: number;
    market_marketable_restriction: number;
    descriptions: ICEconItemDescription[];
    fraudwarnings: string[];
    is_currency: boolean;
    tags: ICEconItemTag[];
    app_data?: any;

    getImageURL(): string;
    getLargeImageURL(): string;
    getTag(category: string): ICEconItemTag;
}

export interface ITradeOffer {
    manager: any;
    id: string;
    partner: string;
    message: string;
    state: ETradeOfferState;
    itemsToGive: ICEconItem[];
    itemsToReceive: ICEconItem[];
    isOurOffer: boolean;
    created: Date;
    updated: Date;
    expires: Date;
    tradeID: string;
    fromRealTimeTrade: boolean;
    confirmationMethod: EConfirmationMethod;
    escrowEnds?: Date;
    rawJson: string;

    addMyItem(item: ICEconItem): void;
    addMyItems(items: ICEconItem[]): void;

    removeMyItem(item: ICEconItem): void;
    removeMyItems(items: ICEconItem[]): void;

    addTheirItem(item: ICEconItem): void;
    addTheirItems(items: ICEconItem[]): void;

    removeTheirItem(item: ICEconItem): void;
    removeTheirItems(items: ICEconItem[]): void;

    setMessage(message: string): void;

    send(callback?: (Err: Error, Status: 'pending' | 'sent') => void): void;
    cancel(callback?: (Err: Error) => void): void;

    decline(callback?: (Err: Error) => void): void;
    accept(
        skipStateUpdate: boolean,
        callback?: (
            Err: Error,
            Status: 'pending' | 'accepted' | 'escrow'
        ) => void
    ): void;
}

export default class SteamAPIManager {
    private APIKey: string;
    private SteamCommunityInstance: any;
    private SteamTradeManagerInstance: any;
    private Logger: Logger;

    private APIRef = 'https://api.steampowered.com/';

    constructor(
        APIKey: string,
        SteamCommunityInstance: any,
        SteamTradeManagerInstance: any
    ) {
        this.APIKey = APIKey;
        this.SteamCommunityInstance = SteamCommunityInstance;
        this.SteamTradeManagerInstance = SteamTradeManagerInstance;
        this.Logger = new Logger(this.constructor.name);
    }

    public GetInventory = (
        SteamID64: string,
        AppID: number,
        ContextID: number,
        Tradable = true
    ): Promise<ICEconItem[]> => {
        return Retry(
            () =>
                new Promise((Resolve, Reject) => {
                    this.SteamTradeManagerInstance.getUserInventoryContents(
                        SteamID64,
                        AppID,
                        ContextID,
                        Tradable,
                        (Err: Error, Inventory: ICEconItem[]) => {
                            if (Err) {
                                Reject(Err);
                            } else {
                                Resolve(Inventory);
                            }
                        }
                    );
                }),
            {
                retries: 100,
                onRetry: (Err: Error) =>
                    this.Logger.log(Err.stack, Levels.ERROR)
            }
        );
    };

    public SendOffer = (
        SteamID64: string,
        Items: ICEconItem[],
        Message: string = ''
    ): Promise<ITradeOffer> =>
        new Promise((Resolve, Reject) => {
            const Offer: ITradeOffer = this.SteamTradeManagerInstance.createOffer(
                SteamID64
            );

            Offer.addTheirItems(Items);
            Offer.setMessage(Message);

            Offer.send((Err, Status) => {
                if (Err) {
                    Reject(Err);
                } else if (Status === 'sent') {
                    Resolve(Offer);
                } else {
                    Reject(Status);
                }
            });
        });

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

                    const IsMember = Members.map(SteamID =>
                        SteamID.toString()
                    ).includes(SteamID64.toString());

                    Resolve(IsMember);
                }
            );
        });
}
