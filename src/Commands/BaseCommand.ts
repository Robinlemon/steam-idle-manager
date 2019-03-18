import Logger, { Levels } from '../Logger';
import SteamUser from 'steam-user';
import SteamAPIManager from '../SteamAPIManager';
import LanguageDecoder, { ENamespaces } from '../LanguageDecoder';

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

export type ArgumentType = {
    type: NumberConstructor | StringConstructor;
    name: string;
    optional?: boolean;
};
export type ExtendedArgumentType = ArgumentType | [ArgumentType];

export default abstract class Command {
    public Identifier: string;
    public IsAdmin: boolean;
    public ArgumentMap: ExtendedArgumentType[];
    public Description: string;
    public Logger: Logger;

    private LanguageDecoder: LanguageDecoder;

    constructor(
        Identifier: string,
        LanguageDecoder: LanguageDecoder,
        IsAdmin: boolean = false,
        ArgumentMap: ExtendedArgumentType[] = []
    ) {
        this.Identifier = Identifier;
        this.LanguageDecoder = LanguageDecoder;
        this.IsAdmin = IsAdmin;
        this.ArgumentMap = ArgumentMap;
    }

    public abstract Trigger = (Args: ITriggerArgs): void => {};

    public InterpolateString = (Namespace: string, Args?: any[]) => {
        return this.LanguageDecoder.InterpolateString(Namespace, Args);
    };

    public Validate = (Arguments: string[]): boolean => {
        let HitInfiniteArgs = false;
        let InfiniteArgsType;

        for (let IDx in this.ArgumentMap) {
            const RequiredType: any = HitInfiniteArgs
                ? InfiniteArgsType
                : this.ArgumentMap[IDx];
            const DataGiven = Arguments[IDx];

            if (Array.isArray(RequiredType)) {
                HitInfiniteArgs = true;
                InfiniteArgsType = (RequiredType as [any])[0];
            } else if (
                typeof RequiredType === 'object' &&
                RequiredType.required
            ) {
            }

            switch (RequiredType) {
                case String:
                    break;

                case Number:
                    const Parsed = parseInt(DataGiven, 10);

                    if (
                        isNaN(Parsed) ||
                        !isFinite(Parsed) ||
                        !Number.isSafeInteger(Parsed)
                    )
                        return false;

                    break;
            }
        }

        return true;
    };
}
