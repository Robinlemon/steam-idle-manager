import Steam from 'steam';
import CommandManager from './CommandManager';
import LanguageDecoder from './LanguageDecoder';
import Logger, { Levels } from './Logger';
import App from './Models/App';
import User from './Models/User';
import MongooseConnection from './MongooseConnection';
import SteamAPIManager, { ICEconItem, ITradeOffer } from './SteamAPIManager';
import SteamBot from './SteamBot';
import { EFriendRelationship, ETradeOfferState } from './SteamEnums';
import SteamResources from './SteamResources';

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
        this.SteamAPIManager = new SteamAPIManager(
            this.APIKey,
            this.Community,
            this.TradeManager
        );
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

        // this.ResourceManager.Start(1000 * 60 * 60 * 24); //24h
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

        this.TradeManager.on('newOffer', this.onNewOffer);
        this.TradeManager.on('sentOfferChanged', this.onSentOfferChanged);

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
        if (Err) {
            this.Logger.log(Err, Levels.ERROR);
        }
    };

    private onLoggedOn = () => {
        this.Logger.log('Successfully logged in to Steam');
    };

    private onWebSession = () => {
        this.Logger.log('Got websession -> going online');

        this.Admins.forEach(Admin => this.Client.addFriend(Admin));
        this.Community.getSteamGroup(this.GroupID, (Err: Error, Group: any) => {
            if (Err) {
                return this.Logger.log(Err, Levels.ERROR);
            } else {
                Group.join();
            }
        });

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
            .filter(
                ([SteamID, IsMember]) =>
                    this.Admins.includes(SteamID.toString()) === false &&
                    IsMember === false
            )
            .map(([SteamID, IsMember]) => SteamID);

        ToRemove.forEach(SteamID => this.Client.removeFriend(SteamID));
    };

    private onFriendMessage = (SteamID: string, Message: string) => {
        const Rels = Object.keys(this.Client.myFriends);

        if (Rels.includes(SteamID.toString()) === false) {
            return;
        }
        if (this.Client.myFriends[SteamID] !== EFriendRelationship.Friend) {
            return;
        }

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
                    if (Err) {
                        return this.Logger.log(Err.stack, Levels.ERROR);
                    }

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

    private FilterCards = (Items: ICEconItem[]) =>
        Items.filter(
            Item =>
                (Item.getTag('item_class') || { name: '' }).name ===
                'Trading Card'
        );

    private RestrictArray = <T>(Original: T[], Len: number): T[] => {
        if (Len === Original.length) {
            return Original;
        }
        if (Len > Original.length || Len < 1) {
            throw new Error('IndexOutOfBounds');
        }
        return Original.slice(0, Len);
    };

    private onNewOffer = (Offer: ITradeOffer) => {
        if (this.Admins.includes(Offer.partner.toString())) {
            Offer.accept(false);
        } else {
            Offer.decline();
        }
    };

    private onSentOfferChanged = async (
        Offer: ITradeOffer,
        OldState: ETradeOfferState
    ): Promise<void> => {
        const SteamID64 = Offer.partner.toString();
        const NewState = Offer.state;

        if (NewState === ETradeOfferState.Accepted) {
            const OnlyCards = this.FilterCards(Offer.itemsToReceive);
            const Count = OnlyCards.reduce(
                (Accumulator, Card) => {
                    const CardAppID = Card.market_fee_app.toString();

                    if (Object.keys(Accumulator).includes(CardAppID)) {
                        Accumulator[CardAppID]++;
                    } else {
                        Accumulator[CardAppID] = 1;
                    }

                    return Accumulator;
                },
                {} as Record<string, number>
            );

            try {
                const CurrentUser = await User.findOne({
                    SteamID64
                });

                if (CurrentUser === null) {
                    return; // not possible, but free items =)
                }

                const AppIDs = Object.keys(Count);
                const ProcessCount = CurrentUser.Owe.length;

                let ProcessesLeft = AppIDs.length;

                for (let RecordID = 0; RecordID < ProcessCount; RecordID++) {
                    if (ProcessesLeft === 0) {
                        break;
                    }

                    const AppID = CurrentUser.Owe[RecordID].AppID.toString();
                    const IDx = AppIDs.indexOf(AppID);

                    if (IDx === -1) {
                        continue;
                    }

                    CurrentUser.Owe[RecordID].CardsGiven += Count[AppID];

                    if (
                        CurrentUser.Owe[RecordID].CardsGiven ===
                        CurrentUser.Owe[RecordID].CardsRequired
                    ) {
                        const HistoryRecordIDx = CurrentUser.History.findIndex(
                            History =>
                                History.AppID ===
                                CurrentUser.Owe[RecordID].AppID
                        );

                        const IdlesCompleted = Math.floor(
                            CurrentUser.Owe[RecordID].CardsGiven /
                                CurrentUser.Owe[RecordID].CardsRequired
                        );

                        if (HistoryRecordIDx > -1) {
                            CurrentUser.History[
                                HistoryRecordIDx
                            ].Count += IdlesCompleted;
                        } else {
                            CurrentUser.History.push({
                                AppID: CurrentUser.Owe[RecordID].AppID,
                                Count: IdlesCompleted
                            });
                        }

                        CurrentUser.GamesIdled += IdlesCompleted;
                        CurrentUser.Owe[
                            RecordID
                        ].InstancesTaken -= IdlesCompleted;

                        if (CurrentUser.Owe[RecordID].InstancesTaken === 0) {
                            CurrentUser.Owe.splice(RecordID, 1);
                        }
                    }

                    AppIDs.splice(IDx, 1);
                    ProcessesLeft--;
                }

                CurrentUser.save();
            } catch (Err) {
                this.Logger.log(Err, Levels.ERROR);
                this.Client.chatMessage(
                    SteamID64,
                    this.LanguageDecoder.InterpolateString('GenericError')
                );
            }
        }
    };
}
