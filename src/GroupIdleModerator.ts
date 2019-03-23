import SteamBot from './SteamBot';
import Logger, { Levels } from './Logger';
import CommandManager from './CommandManager';
import { EFriendRelationship } from './SteamEnums';
import User from './Models/User';
import App from './Models/App';
import Steam from 'steam';
import SteamResources from './SteamResources';
import SteamAPIManager from './SteamAPIManager';
import LanguageDecoder from './LanguageDecoder';
import MongooseConnection from './MongooseConnection';
import { stringLiteral } from '@babel/types';

export default class GroupIdleModerator extends SteamBot {
    private Admins: string[];
    private CommandDelimiter: string;
    private Commands: CommandManager;
    private ResourceManager: SteamResources;
    private SteamAPIManager: SteamAPIManager;
    private LanguageDecoder: LanguageDecoder;
    private MongooseConnection: MongooseConnection;
    private GroupID: string;
    private Logger: Logger;

    constructor(Props: any) {
        super({
            ...Props
        });

        this.Logger = new Logger(this.constructor.name);
        this.ResourceManager = new SteamResources();
        this.SteamAPIManager = new SteamAPIManager(this.APIKey, this.Community);
        this.LanguageDecoder = new LanguageDecoder();
        this.MongooseConnection = new MongooseConnection(
            Props.MongoConnectionString
        );

        this.CommandDelimiter = Props.CommandDelimiter;
        this.Admins = Props.Admins.split(',');
        this.GroupID = Props.GroupID;

        this.Commands = new CommandManager(
            this.Client,
            this.Admins,
            this.CommandDelimiter,
            this.SteamAPIManager,
            this.LanguageDecoder
        );

        this.Initialise();
    }

    private async Initialise() {
        await Promise.all([
            this.LanguageDecoder.GetInternalPromise(),
            this.MongooseConnection.Initialise()
        ]);

        //this.ResourceManager.Start(1000 * 60 * 60 * 24); //24h
        this.Commands.RegisterClasses();
        this.SetupEvents();

        this.Logger.log('Connecting to Steam', Levels.VERBOSE);
        this.Login();
    }

    private SetupEvents() {
        this.Client.on('error', this.onError);
        this.Client.on('loggedOn', this.onLoggedOn);
        this.Client.on('webSession', this.onWebSession);
        this.Client.on('friendMessage', this.onFriendMessage);
        this.Client.on('friendRelationship', this.onFriendRelationship);
        this.Client.on('friendsList', this.onFriendsList);

        this.Logger.log('Steam event listeners initialised', Levels.VERBOSE);
    }

    private SetName = async (): Promise<void> => {
        const Records = await App.find({
            TotalKeys: { $gt: 0 }
        });

        const QtyKeys = Records.reduce(
            (CurrentQty, Record) => CurrentQty + Record.TotalKeys,
            0
        );

        const Name = this.LanguageDecoder.InterpolateString('SteamName', [
            QtyKeys
        ]);

        this.Client.setPersona(Steam.EPersonaState.Online, Name);
        this.Logger.log(`Set name to ${Name}`);
    };

    private SetGame = async (): Promise<void> => {
        const GameString = this.LanguageDecoder.InterpolateString('SteamGame');

        this.Client.gamesPlayed(GameString);
        this.Logger.log(`Set game to ${GameString}`);
    };

    private onError = (Err: Error) => {
        if (Err) this.Logger.log(Err.stack, Levels.ERROR);
    };

    private onLoggedOn = () => {
        this.Logger.log('Successfully logged in to Steam');
    };

    private onWebSession = () => {
        this.Logger.log('Got websession -> going online');

        this.SetName();
        this.SetGame();
    };

    private onFriendsList = async (): Promise<void> => {
        const OnlyFriends = Object.entries(this.Client.myFriends)
            .filter(
                ([SteamID64, Relationship]: [string, EFriendRelationship]) =>
                    Relationship === EFriendRelationship.Friend
            )
            .map(
                ([SteamID64, Relationship]: [string, EFriendRelationship]) =>
                    SteamID64
            );

        const MemberMap = await this.SteamAPIManager.GetGroupMembershipStatuses(
            OnlyFriends,
            this.GroupID
        );

        const ToRemove = Object.entries(MemberMap)
            .filter(([SteamID, IsMember]) => IsMember === false)
            .map(([SteamID, IsMember]) => SteamID);

        ToRemove.forEach(SteamID => this.Client.removeFriend(SteamID));
    };

    private onFriendMessage = (SteamID: string, Message: string) => {
        this.Commands.HandleInput(SteamID, Message);
    };

    private onFriendRelationship = async (
        SteamID: string,
        Relationship: EFriendRelationship
    ): Promise<void> => {
        if (Relationship === EFriendRelationship.RequestRecipient) {
            const IsInGroup = await this.SteamAPIManager.IsInGroup(
                SteamID,
                this.GroupID
            );

            if (IsInGroup === false) {
                this.Client.removeFriend(SteamID);
                return;
            }

            this.Client.addFriend(
                SteamID,
                async (Err: Error, PersonaName: string) => {
                    if (Err) return this.Logger.log(Err.stack, Levels.ERROR);

                    const Message = this.LanguageDecoder.InterpolateString(
                        'SteamWelcome',
                        [PersonaName]
                    );

                    this.Client.chatMessage(SteamID, Message);

                    try {
                        await User.findOneAndUpdate(
                            {
                                SteamID64: SteamID
                            },
                            {
                                SteamID64: SteamID
                            },
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
            );
        }
    };
}
