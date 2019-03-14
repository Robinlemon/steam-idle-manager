import Logger, { Levels } from './Logger';

import SteamUser from 'steam-user';
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager');

export interface IProps {
    User: string;
    Password: string;
    APIKey: string;
    IdentitySecret: string;
    SharedSecret: string;
    Logger?: Logger;
}

export default class SteamBot {
    public Username: string;
    public Password: string;
    public APIKey: string;
    private IdentitySecret: string;
    private SharedSecret: string;
    private InternalLogger: Logger;
    public LoggedOn: boolean;

    private SessionID: any;
    private Cookies: any;

    protected Client: any;
    protected Community: any;
    protected TradeManager: any;

    public Initialised: number;

    private ConfirmationCheckerDelay: number = 10 * 1000;
    private LoginInterval: number = 0;
    private LoginIntervalCumulativeCost: number = 30 * 1000;

    constructor(Props: IProps) {
        this.Username = Props.User;
        this.Password = Props.Password;
        this.APIKey = Props.APIKey;
        this.IdentitySecret = Props.IdentitySecret;
        this.SharedSecret = Props.SharedSecret;

        this.InternalLogger = new Logger(this.constructor.name);
        this.Initialised = Date.now();
        this.LoggedOn = false;

        this.Community = new SteamCommunity();
        this.Client = new SteamUser(null, {
            promptSteamGuardCode: false
        });

        this.TradeManager = new TradeOfferManager({
            steam: this.Client,
            community: this.Community,
            domain: 'localhost',
            language: 'en'
        });

        this.SetupDefaultEvents();
    }

    private GetAuthCode = () => SteamTotp.generateAuthCode(this.SharedSecret);

    private SetupDefaultEvents() {
        this.Client.on('error', (Err: Error) => {
            if (typeof Err !== 'undefined') {
                this.InternalLogger.log(Err.stack, Levels.DEBUG);

                if (Err.message === 'RateLimitExceeded') {
                    if (this.LoginInterval < 24 * 60 * 60 * 1000)
                        this.LoginInterval += this.LoginIntervalCumulativeCost;
                    return setTimeout(this.Login, this.LoginInterval);
                }
            }
        });

        this.Client.on('disconnected', (EResult: number, Message: string) => {
            this.LoggedOn = false;
            this.InternalLogger.log(`${EResult} -> ${Message}`, Levels.DEBUG);
        });

        this.Community.on('sessionExpired', (Err: Error) => {
            if (typeof Err !== 'undefined') {
                this.InternalLogger.log(Err.stack, Levels.DEBUG);
                if (this.LoggedOn) this.Client.webLogOn();
            }
        });

        this.Client.on('loggedOn', () => {
            this.LoggedOn = true;
        });

        this.Client.on('webSession', (SessionID: any, Cookies: any) => {
            this.SessionID = SessionID;
            this.Cookies = Cookies;

            this.TradeManager.setCookies(this.Cookies, (Err: Error) => {
                if (typeof Err !== 'undefined')
                    this.InternalLogger.log(Err.stack, Levels.DEBUG);

                this.Community.startConfirmationChecker(
                    this.ConfirmationCheckerDelay,
                    this.IdentitySecret
                );
            });
        });
    }

    public Login = () =>
        this.Client.logOn({
            accountName: this.Username,
            password: this.Password,
            twoFactorCode: this.GetAuthCode()
        });
}
