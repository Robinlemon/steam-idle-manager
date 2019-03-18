import BaseCommand from './Commands/BaseCommand';
import {
    Broadcast,
    Ban,
    Unban,
    Tier,
    Apps,
    AddKey,
    Stock,
    AddTag,
    RemoveTag,
    Owe,
    AllOwe,
    AllIdled,
    Compare,
    Redeem,
    RedeemAll,
    Group,
    Contact,
    PrintRaw
} from './Commands/';
import FuzzySort from 'fuzzysort';
import Logger, { Levels } from './Logger';
import User from './Models/User';
import SteamUser from 'steam-user';
import SteamAPIManager from './SteamAPIManager';
import LanguageDecoder from './LanguageDecoder';
import Command, { ArgumentType } from './Commands/BaseCommand';
import HelpCommand from './Commands/HelpCommand';
import { Level } from 'chalk';

interface ClassDefinition<T> extends Function {
    new (...args: any[]): T;
}

interface HelpBuilderBlock {
    Identifier: string;
    Description: string;
    Arguments: string;
    IsDebug: boolean;
    IsAdmin: boolean;
}

export default class CommandWrapper {
    private SteamClient: any /*SteamUser*/;
    private CommandClasses: ClassDefinition<BaseCommand>[];
    private CommandBundle: BaseCommand[];
    private Admins: string[];
    private CommandDelimiter: string;
    private HelpBuilder: HelpBuilderBlock[];
    private Logger: Logger;
    private SteamAPIManager: SteamAPIManager;
    private LanguageDecoder: LanguageDecoder;

    constructor(
        SteamClient: any /*SteamUser*/,
        Admins: string[],
        CommandDelimiter: string,
        SteamAPIManager: SteamAPIManager,
        LanguageDecoder: LanguageDecoder
    ) {
        this.SteamClient = SteamClient;
        this.Admins = Admins;
        this.CommandDelimiter = CommandDelimiter;
        this.SteamAPIManager = SteamAPIManager;
        this.LanguageDecoder = LanguageDecoder;

        this.Logger = new Logger(this.constructor.name);

        this.CommandClasses = [
            HelpCommand,
            Broadcast,
            Ban,
            Unban,
            Tier,
            Apps,
            AddKey,
            Stock,
            AddTag,
            RemoveTag,
            Owe,
            AllOwe,
            AllIdled,
            Compare,
            Redeem,
            RedeemAll,
            Group,
            Contact,
            PrintRaw
        ];

        this.Logger.log(`Command Manager Initialised`, Levels.VERBOSE);
    }

    public RegisterClasses() {
        this.Logger.log(`Registering Classes`, Levels.VERBOSE);
        this.CommandBundle = this.CommandClasses.map(
            (Ref: any) => new Ref(this.LanguageDecoder)
        );
        this.PostRegister();
    }

    private PostRegister() {
        this.Logger.log(
            `Found ${this.CommandBundle.length} Commands`,
            Levels.VERBOSE
        );

        this.Logger.log(
            `Dynamically Generating Help Documentation...`,
            Levels.VERBOSE
        );

        this.HelpBuilder = this.CommandBundle.map(this.DocumentCommand);

        this.Logger.log(`Created Help Documentation`, Levels.VERBOSE);
    }

    public async HandleInput(SteamID: string, Message: string) {
        const Split: string[] = Message.split(/[ ,]+/);
        const Delimiter: string = this.CommandDelimiter;
        const IsCommand: boolean = Message.charAt(0) === Delimiter;
        const Command: string = Split[0]
            ? Split[0].substr(Delimiter.length)
            : '';
        const Arguments: string[] = Split[0]
            ? Split.splice(Delimiter.length)
            : [];

        const CurrentUser = await User.findOne({
            SteamID64: SteamID
        });

        if (CurrentUser === null) {
            this.SteamClient.chatMessage(
                SteamID,
                `Internal Error, try adding me again!`
            );
            this.SteamClient.removeFriend(SteamID);
            return;
        }

        if (CurrentUser.Banned) {
            return this.SteamClient.chatMessage(SteamID, `You are banned.`);
        }

        await CurrentUser.UpdateInteraction();

        if (IsCommand)
            this.RouteCommand(Command.toLowerCase(), SteamID, Arguments);
        else this.SuggestCommand(Command.toLowerCase(), SteamID);
    }

    private DocumentCommand = (Command: BaseCommand) => {
        const Arguments = Command.ArgumentMap.map(Arg => {
            const IsCurried = Array.isArray(Arg);
            const {
                name: ArgName,
                type: ParamType,
                optional: IsOptional = false,
                linuxStyle: LinuxStyle = false
            } = IsCurried ? (Arg as [ArgumentType])[0] : (Arg as ArgumentType);

            if (LinuxStyle)
                return [
                    '<',
                    ArgName.split('|')
                        .map(k => `${k}?`)
                        .join('|'),
                    '>'
                ].join('');
            else
                return [
                    IsCurried ? '[' : '',
                    '<',
                    ArgName,
                    IsOptional ? '?' : '',
                    '>',
                    IsCurried ? ']' : ''
                ].join('');
        }).join(' ');

        return {
            Identifier: Command.Identifier,
            Description: Command.Description,
            Arguments: Arguments,
            IsDebug: Command.IsDebug,
            IsAdmin: Command.IsAdmin
        } as HelpBuilderBlock;
    };

    public IsAdmin = (SteamID64: string) =>
        this.Admins.includes(SteamID64.toString());

    private HelpCommand(SteamID64: string, Arguments: string[] = []) {
        const IsAnAdmin = this.IsAdmin(SteamID64);

        const Args = Arguments.join('');
        const ShowDebug = Args.includes('a');

        const AdminInclusive = this.HelpBuilder.filter(
            CommandBlock => +CommandBlock.IsAdmin <= +IsAnAdmin
        );

        const DebugInclusive = AdminInclusive.filter(
            CommandBlock => +CommandBlock.IsDebug <= +ShowDebug
        );

        const CommandStrings = DebugInclusive.map(
            ({ Identifier, Arguments, Description }) =>
                `!${Identifier} ${Arguments} -> ${Description}`
        );

        const Readable = CommandStrings.join('\n');
        this.SteamClient.chatMessage(SteamID64, Readable);
    }

    private RouteCommand(
        Identifier: string,
        SteamID64: string,
        Arguments?: string[]
    ) {
        if (Identifier === 'help')
            return this.HelpCommand(SteamID64, Arguments);

        const CommandFound = this.CommandBundle.find(
            (Command: BaseCommand) => Command.Identifier === Identifier
        );

        if (typeof CommandFound !== 'undefined') {
            this.Logger.log(
                `${SteamID64.toString()} -> !${Identifier} ${Arguments.join(
                    ' '
                )}`,
                Levels.DEBUG
            );

            if (!CommandFound.Validate(Arguments)) {
                this.SteamClient.chatMessage(SteamID64, `Invalid Usage!`);

                this.Logger.log(
                    `${SteamID64.toString()} -> Invalid Usage`,
                    Levels.DEBUG
                );

                return;
            }

            if (CommandFound.IsAdmin) {
                if (this.Admins.includes(SteamID64.toString())) {
                    CommandFound.Trigger({
                        SteamClient: this.SteamClient,
                        SteamID64,
                        Arguments,
                        SteamAPIManager: this.SteamAPIManager
                    });
                } else {
                    //Pretend it doesnt exist
                    return this.SuggestCommand(Identifier, SteamID64);
                    // this.SteamClient.chatMessage(
                    //     SteamID64,
                    //     `This command is for admins only!`
                    // );
                }
            } else {
                CommandFound.Trigger({
                    SteamClient: this.SteamClient,
                    SteamID64,
                    Arguments,
                    SteamAPIManager: this.SteamAPIManager
                });
            }
        } else this.SuggestCommand(Identifier, SteamID64);
    }

    private SuggestCommand(Identifier: string, SteamID64: string) {
        const PotentialCommands = FuzzySort.go(Identifier, this.CommandBundle, {
            key: 'Identifier'
        })
            .filter((Result: { score: number }) => Result.score > -2000)
            .filter(
                CommandObj =>
                    +CommandObj.obj.IsAdmin <= +this.IsAdmin(SteamID64)
            )
            .map(
                CommandObj =>
                    `✔ ${this.CommandDelimiter}${CommandObj.obj.Identifier}`
            );

        const Message = [
            '↓ ↓ ↓',
            '',
            '★ Did you mean: ★',
            PotentialCommands.join('\n')
        ];

        if (PotentialCommands.length > 0)
            this.SteamClient.chatMessage(SteamID64, Message.join('\n'));
    }
}
