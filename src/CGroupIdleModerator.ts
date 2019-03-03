import SteamBot from './CSteamBot';
import Logger, { Levels } from './CLogger';
import CommandWrapper from './Commands';

const Steam = require('steam');
const SteamID = require('steamid');

const StdOut = new Logger('Group Mod');

export default class GroupIdleModerator extends SteamBot {
    private Admins: string[];
    private CommandDelimiter: string;
    private Commands: CommandWrapper;

    constructor(Props: any) {
        super({
            ...Props,
            Logger: new Logger('SteamBot'),
        });

        this.CommandDelimiter = Props.CommandDelimiter;
        this.Admins = Props.Admins.split(',');
        this.Commands = new CommandWrapper(
            this.Client,
            this.Admins,
            this.CommandDelimiter,
        );

        StdOut.log({
            level: Levels.VERBOSE,
            message: `Found ${this.Admins.length} Admin${
                this.Admins.length > 1 ? 's' : ''
            }: ${this.Admins.join(', ')}`,
        });

        this.SetupEvents();
        this.Login();
    }

    private SetupEvents() {
        this.Client.on('error', this.onError);
        this.Client.on('loggedOn', this.onLoggedOn);
        this.Client.on('webSession', this.onWebSession);
        this.Client.on('friendMessage', this.onFriendMessage);
    }

    private onError = (Err: Error) => {
        if (Err)
            StdOut.log({
                level: Levels.ERROR,
                message: `${Err}`,
            });
    };

    private onLoggedOn = () => {
        StdOut.log({
            level: Levels.INFO,
            message: 'Logged on!',
        });
    };

    private onWebSession = () => {
        this.Client.setPersona(Steam.EPersonaState.Online);

        StdOut.log({
            level: Levels.INFO,
            message: 'Set Status to EPersonaState.Online',
        });
    };

    private onFriendMessage = (SteamID: string, Message: string) => {
        this.Commands.HandleInput(SteamID, Message);
    };
}
