import Logger, { Levels } from '../Logger';
const SteamUser = require('steam-user');
import LanguageDecoder, { ENamespaces } from '../LanguageDecoder';
import SteamAPIManager from '../SteamAPIManager';

export interface ICommandProps {
    Identifier: string;
    IsAdmin: boolean;
}

export interface ITriggerArgs {
    SteamClient: any /*SteamUser*/;
    SteamID64: string;
    SteamAPIManager: SteamAPIManager;
    Arguments?: string[];
}

export interface IArgumentType {
    type: NumberConstructor | StringConstructor | 'expression';
    name: string;
    optional?: boolean;
    linuxStyle?: boolean;
}
export type ExtendedArgumentType = IArgumentType | [IArgumentType];

export default abstract class Command {
    public Identifier: string;
    public IsAdmin: boolean;
    public ArgumentMap: ExtendedArgumentType[];
    public Description: string;
    public IsDebug: boolean;
    public Logger: Logger;

    private Decoder: LanguageDecoder;

    constructor(
        Identifier: string,
        Decoder: LanguageDecoder,
        IsAdmin: boolean = false,
        ArgumentMap: ExtendedArgumentType[] = [],
        IsDebug: boolean = false
    ) {
        this.Identifier = Identifier;
        this.Decoder = Decoder;
        this.IsAdmin = IsAdmin;
        this.ArgumentMap = ArgumentMap;
        this.IsDebug = IsDebug;

        this.Logger = new Logger(this.Identifier);
        this.Description = this.InterpolateString(
            `${this.Identifier}Description`
        );
    }

    public abstract Trigger(Args: ITriggerArgs): void;

    public InterpolateString = (Namespace: string, Args?: any[]) => {
        return this.Decoder.InterpolateString(Namespace, Args);
    };

    public Validate = (Arguments: string[]): boolean => {
        let HitInfiniteArgs = false;
        let InfiniteArgsType;

        for (const IDx in this.ArgumentMap) {
            const RequiredType: any = HitInfiniteArgs
                ? InfiniteArgsType
                : this.ArgumentMap[IDx];
            const DataGiven = Arguments[IDx];

            if (Array.isArray(RequiredType)) {
                HitInfiniteArgs = true;
                InfiniteArgsType = (RequiredType as [any])[0];
            }

            switch (RequiredType) {
                case 'expression':
                    break;

                case String:
                    break;

                case Number:
                    const Parsed = parseInt(DataGiven, 10);

                    if (
                        isNaN(Parsed) ||
                        !isFinite(Parsed) ||
                        !Number.isSafeInteger(Parsed)
                    ) {
                        return false;
                    }

                    break;
            }
        }

        return true;
    };
}
