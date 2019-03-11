import Logger from '../Logger';

export interface ICommandProps {
    Identifier: string;
    IsAdmin: boolean;
}

export interface ITriggerArgs {
    SteamClient: any;
    SteamID64: string;
    Arguments?: string[];
}

export default abstract class Command {
    public Identifier: string;
    public IsAdmin: boolean;
    public ArgumentMap: any[];
    public Logger: Logger;

    constructor(Identifier: string, IsAdmin: boolean, ArgumentMap: any[]) {
        this.Identifier = Identifier;
        this.IsAdmin = IsAdmin;
        this.ArgumentMap = ArgumentMap;
    }

    public abstract Trigger = (Args: ITriggerArgs): void => {};

    public Validate = (Arguments: any): boolean => {
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
            }

            switch (RequiredType) {
                case String:
                    break;

                case Number:
                    if (isNaN(DataGiven)) return false;

                    const Parsed = parseInt(DataGiven, 10);

                    if (!isFinite(Parsed) || !Number.isSafeInteger(Parsed))
                        return false;

                    break;

                case Array:
            }
        }

        return true;
    };
}
