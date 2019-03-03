import Logger, { Levels } from './CLogger';
import { Level } from 'chalk';

const SteamUser = require('steam-user');
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
    private Username: string;
    private Password: string;
    private APIKey: string;
    private IdentitySecret: string;
    private SharedSecret: string;
    private StdOut: Logger;

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
        this.StdOut = Props.Logger;
        this.Initialised = Date.now();

        this.Community = new SteamCommunity();
        this.Client = new SteamUser(null, {
            promptSteamGuardCode: false,
        });

        this.TradeManager = new TradeOfferManager({
            steam: this.Client,
            domain: 'localhost',
            language: 'en',
        });

        this.SetupDefaultEvents();
    }

    private GetAuthCode = () => SteamTotp.generateAuthCode(this.SharedSecret);

    private SetupDefaultEvents() {
        this.Client.on('error', (Err: Error) => {
            if (typeof this.StdOut !== 'undefined')
                this.StdOut.log({
                    level: Levels.DEBUG,
                    message: `${Err}`,
                });

            if (Err.message === 'RateLimitExceeded') {
                if (this.LoginInterval < 24 * 60 * 60 * 1000)
                    this.LoginInterval += this.LoginIntervalCumulativeCost;
                return setTimeout(this.Login, this.LoginInterval);
            }
        });

        this.Client.on('disconnected', (EResult: number, Message: string) => {
            if (typeof this.StdOut !== 'undefined')
                this.StdOut.log({
                    level: Levels.DEBUG,
                    message: `${EResult} -> ${Message}`,
                });
        });

        this.Community.on('sessionExpired', (Err: Error) => {
            if (typeof this.StdOut !== 'undefined')
                this.StdOut.log({
                    level: Levels.DEBUG,
                    message: `${Err}`,
                });

            this.Client.webLogOn();
        });

        this.Client.on('webSession', (SessionID: any, Cookies: any) => {
            this.SessionID = SessionID;
            this.Cookies = Cookies;

            this.TradeManager.setCookies(this.Cookies, (Err: Error) => {
                if (Err && typeof this.StdOut !== 'undefined')
                    this.StdOut.log({
                        level: Levels.DEBUG,
                        message: `${Err}`,
                    });

                this.Community.setCookies(this.Cookies);
                this.Community.startConfirmationChecker(
                    this.ConfirmationCheckerDelay,
                    this.IdentitySecret,
                );
            });
        });
    }

    public Login = () =>
        this.Client.logOn({
            accountName: this.Username,
            password: this.Password,
            twoFactorCode: this.GetAuthCode(),
        });
}
