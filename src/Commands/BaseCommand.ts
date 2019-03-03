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
    public ArgumentMap: string[];

    constructor(Identifier: string, IsAdmin: boolean, ArgumentMap: string[]) {
        this.Identifier = Identifier;
        this.IsAdmin = IsAdmin;
        this.ArgumentMap = this.ArgumentMap;
    }

    public abstract Trigger = (Args: ITriggerArgs): void => {};

    public Validate = (Arguments: any): boolean => {
        if (this.ArgumentMap.length !== Arguments) return false;

        for (let IDx in this.ArgumentMap) {
            const RequiredType = this.ArgumentMap[IDx];
            const DataGiven = Arguments[IDx];

            switch (RequiredType) {
                case 'string':
                    break;

                case 'number':
                    if (isNaN(DataGiven)) return false;

                    const Parsed = parseInt(DataGiven, 10);

                    if (!isFinite(Parsed) || !Number.isSafeInteger(Parsed))
                        return false;

                    break;
            }
        }

        return true;
    };
}
