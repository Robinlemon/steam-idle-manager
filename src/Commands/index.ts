import BaseCommand from './BaseCommand';
import FuzzySort from 'fuzzysort';
import BroadcastMessage from './BroadcastMessage/BroadcastMessage';
import { NotImplemented } from '../Errors';

import Logger, { Levels } from '../CLogger';
const StdOut = new Logger('CommandWrapper');

/**
 *  @todo Add semantic types for commands
 */
export default class CommandWrapper {
    private SteamClient: any;
    private CommandBundle: BaseCommand[];
    private Admins: string[];
    private CommandDelimiter: string;

    constructor(SteamClient: any, Admins: string[], CommandDelimiter: string) {
        this.SteamClient = SteamClient;
        this.Admins = Admins;
        this.CommandDelimiter = CommandDelimiter;
        this.CommandBundle = [new BroadcastMessage()];
    }

    public HandleInput(SteamID: string, Message: string) {
        const Split: string[] = Message.split(' ');
        const Delimiter: string = this.CommandDelimiter;
        const IsCommand: boolean = Message.charAt(0) === Delimiter;
        const Command: string = Split[0]
            ? Split[0].substr(Delimiter.length)
            : '';
        const Arguments: string[] = Split[0]
            ? Split.splice(Delimiter.length)
            : [];

        if (IsCommand)
            this.RouteCommand(Command.toLowerCase(), SteamID, Arguments);
        else this.SuggestCommand(Command.toLowerCase(), SteamID);
    }

    private RouteCommand(
        Identifier: string,
        SteamID64: string,
        Arguments?: string[],
    ) {
        const CommandFound = this.CommandBundle.find(
            (Command: BaseCommand) => Command.Identifier === Identifier,
        );

        if (typeof CommandFound !== 'undefined') {
            StdOut.log({
                level: Levels.DEBUG,
                message: `${SteamID64.toString()} -> !${Identifier} ${Arguments.join(
                    ' ',
                )}`,
            });

            if (!CommandFound.Validate(Arguments)) {
                this.SteamClient.chatMessage(SteamID64, `Invalid Usage!`);

                StdOut.log({
                    level: Levels.DEBUG,
                    message: `${SteamID64.toString()} -> Invalid Usage`,
                });

                return;
            }

            if (CommandFound.IsAdmin) {
                if (this.Admins.includes(SteamID64.toString())) {
                    CommandFound.Trigger({
                        SteamClient: this.SteamClient,
                        SteamID64,
                        Arguments,
                    });
                } else {
                    this.SteamClient.chatMessage(
                        SteamID64,
                        `This command is for admins only!`,
                    );
                }
            } else {
                CommandFound.Trigger({
                    SteamClient: this.SteamClient,
                    SteamID64,
                    Arguments,
                });
            }
        } else this.SuggestCommand(Identifier, SteamID64);
    }

    private SuggestCommand(Identifier: string, SteamID64: string) {
        const PotentialCommands = FuzzySort.go(Identifier, this.CommandBundle, {
            key: 'Identifier',
        })
            .filter((Result: { score: number }) => Result.score > -2000)
            .map(
                CommandObj =>
                    `✔ ${this.CommandDelimiter}${CommandObj.obj.Identifier}`,
            );

        const Message = [
            '↓ ↓ ↓',
            '',
            '★ Did you mean: ★',
            PotentialCommands.join('\n'),
        ];

        if (PotentialCommands.length > 0)
            this.SteamClient.chatMessage(SteamID64, Message.join('\n'));
    }
}
