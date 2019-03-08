import SteamBot from './SteamBot';
import Logger, { Levels } from './Logger';
import CommandManager from './CommandManager';
import { EFriendRelationship } from './SteamEnums';
import User from './Models/User';
import Steam from 'steam';
import Mongoose from 'mongoose';
import { MongoError } from 'mongodb';
import SteamResources from './SteamResources';

export default class GroupIdleModerator extends SteamBot {
    private Admins: string[];
    private CommandDelimiter: string;
    private Commands: CommandManager;
    private ResourceManager: SteamResources;
    private Logger: Logger;

    constructor(Props: any) {
        super({
            ...Props,
            Logger: new Logger('SteamBot')
        });

        Mongoose.connect(
            Props.MongoConnectionString,
            { useNewUrlParser: true },
            (Err: MongoError) => {
                if (Err)
                    return this.Logger.log({
                        level: Levels.ERROR,
                        message: `${Err}`
                    });

                this.Logger.log({
                    level: Levels.DEBUG,
                    message: 'Connected'
                });
            }
        );

        this.Logger = new Logger(this.constructor.name);
        this.CommandDelimiter = Props.CommandDelimiter;
        this.Admins = Props.Admins.split(',');
        this.Commands = new CommandManager(
            this.Client,
            this.Admins,
            this.CommandDelimiter
        );

        this.ResourceManager = new SteamResources();
        this.ResourceManager.Start(1000 * 60 * 30);

        this.Logger.log({
            level: Levels.VERBOSE,
            message: `Found ${this.Admins.length} Admin${
                this.Admins.length > 1 ? 's' : ''
            }: ${this.Admins.join(', ')}`
        });

        this.SetupEvents();
        this.Login();
    }

    private SetupEvents() {
        this.Client.on('error', this.onError);
        this.Client.on('loggedOn', this.onLoggedOn);
        this.Client.on('webSession', this.onWebSession);
        this.Client.on('friendMessage', this.onFriendMessage);
        this.Client.on('friendRelationship', this.onFriendRelationship);
    }

    private onError = (Err: Error) => {
        if (Err)
            this.Logger.log({
                level: Levels.ERROR,
                message: `${Err}`
            });
    };

    private onLoggedOn = () => {
        this.Logger.log({
            level: Levels.INFO,
            message: 'Logged on!'
        });
    };

    private onWebSession = () => {
        this.Client.setPersona(Steam.EPersonaState.Online);

        this.Logger.log({
            level: Levels.INFO,
            message: 'Set Status to EPersonaState.Online'
        });
    };

    private onFriendMessage = (SteamID: string, Message: string) => {
        this.Commands.HandleInput(SteamID, Message);
    };

    private onFriendRelationship = (
        SteamID: string,
        Relationship: EFriendRelationship
    ) => {
        this.Logger.log({
            level: Levels.INFO,
            message: `Got Friend Relation ${SteamID} -> ${Relationship}`
        });

        if (Relationship === EFriendRelationship.RequestRecipient) {
            this.Client.addFriend(SteamID);
            this.Client.chatMessage(SteamID, `Yo Whatup`);

            User.findOneAndUpdate(
                {
                    SteamID64: SteamID
                },
                {},
                {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                },
                (Err: MongoError, Result: InstanceType<any & typeof User>) => {
                    if (Err)
                        return this.Logger.log({
                            level: Levels.ERROR,
                            message: `${Err}`
                        });

                    this.Logger.log({
                        level: Levels.DEBUG,
                        message: Result.toString()
                    });
                }
            );
        }
    };
}
