import SteamBot from './SteamBot';
import Logger, { Levels } from './Logger';
import CommandManager from './CommandManager';
import { EFriendRelationship } from './SteamEnums';
import User from './Models/User';
import App from './Models/App';
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
            ...Props
        });

        Mongoose.connect(
            Props.MongoConnectionString,
            { useNewUrlParser: true, autoReconnect: true },
            (Err: MongoError) => {
                if (Err) return this.Logger.log(`${Err.stack}`, Levels.ERROR);
                this.Logger.log('Connected to MongoDB', Levels.DEBUG);
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
        //this.ResourceManager.Start(1000 * 60 * 60 * 24); //24h

        this.SetupEvents();

        this.Logger.log('Attempting to connect to Steam...', Levels.VERBOSE);
        this.Login();
    }

    private SetupEvents() {
        this.Client.on('error', this.onError);
        this.Client.on('loggedOn', this.onLoggedOn);
        this.Client.on('webSession', this.onWebSession);
        this.Client.on('friendMessage', this.onFriendMessage);
        this.Client.on('friendRelationship', this.onFriendRelationship);

        this.Logger.log('Steam Event Listeners Initialised', Levels.VERBOSE);
    }

    private SetName = (Name: string): void => {
        this.Client.setPersona(Steam.EPersonaState.Online, Name);
        this.Logger.log(`Set name to ${Name}`);
    };

    private SetGame = async (): Promise<void> => {
        // const Records = await App.find({
        //     TotalKeys: { $gt: 0 }
        // });

        // const QtyKeys = Records.reduce(
        //     (CurrentQty, Record) => CurrentQty + Record.TotalKeys,
        //     0
        // );

        const GameString = `Distributing CD Keys`;

        this.Client.gamesPlayed(GameString);
        this.Logger.log(`Set Game Played: ${GameString}`);
    };

    private onError = (Err: Error) => {
        if (Err) this.Logger.log(Err.stack, Levels.ERROR);
    };

    private onLoggedOn = () => {
        this.Logger.log('Successfully logged in to Steam');
    };

    private onWebSession = () => {
        this.Logger.log('Got WebSession, going Online');

        this.Logger.log('Setting Name...');
        this.SetName(`¡ IdleFreaks Distributor`);

        this.Logger.log('Setting Game...');
        this.SetGame();
    };

    private onFriendMessage = (SteamID: string, Message: string) => {
        this.Commands.HandleInput(SteamID, Message);
    };

    private onFriendRelationship = async (
        SteamID: string,
        Relationship: EFriendRelationship
    ) => {
        this.Logger.log(`Got Friend Relation ${SteamID} -> ${Relationship}`);

        if (Relationship === EFriendRelationship.RequestRecipient) {
            this.Client.addFriend(SteamID);
            this.Client.chatMessage(SteamID, `Yo Whatup`);

            try {
                await User.findOne(
                    {
                        SteamID64: SteamID
                    },
                    {},
                    {
                        upsert: true,
                        new: true,
                        setDefaultsOnInsert: true
                    }
                );
            } catch (Err) {
                this.Logger.log(Err.stack, Levels.ERROR);
            }
        }
    };
}
