import Logger, { Levels } from './Logger';
import INamespaceMap from './Locale/INamespaces';

export type ENamespaces = keyof INamespaceMap;

export default class LanguageDecoder {
    private FailSafeString = "Sorry, I don't have a response for you!";

    private LanguageData: INamespaceMap;
    private Logger: Logger;

    private InternalPromise: Promise<void>;
    private ResolveInternalPromise: () => void;
    private InterpolationRegex = /\$\d+/gm;

    constructor() {
        this.Logger = new Logger(this.constructor.name);

        this.InternalPromise = new Promise(Resolve => {
            this.ResolveInternalPromise = Resolve;
        });

        this.LoadLanguage('English');
    }

    public GetInternalPromise = () => this.InternalPromise;

    private GetString(Namespace: ENamespaces) {
        this.Logger.log(`Retrieving ${Namespace}`, Levels.SILLY);

        if (Object.keys(this.LanguageData).includes(Namespace))
            return this.LanguageData[Namespace];
        else {
            this.Logger.log(
                `Namespace \`${Namespace}\` doesn't exist`,
                Levels.WARN
            );

            return this.FailSafeString;
        }
    }

    public InterpolateString = (
        Namespace: string,
        Args: any[] = []
    ): string => {
        const StandardMessage = this.GetString(Namespace as ENamespaces);

        if (StandardMessage.match(this.InterpolationRegex) === null)
            return StandardMessage;
        else
            return StandardMessage.replace(this.InterpolationRegex, Match => {
                const IDx = +Match.substr(1);

                if (Args.length >= IDx) return Args[IDx - 1];
                else return null;
            });
    };

    private async LoadLanguage(LanguageName: string): Promise<void> {
        try {
            this.LanguageData = (await import(`./Locale/${LanguageName}.ts`))[
                'default'
            ];

            this.ResolveInternalPromise();
        } catch {
            this.Logger.log(
                new Error(`Error parsing ${LanguageName} locale`).stack,
                Levels.ERROR
            );
        }
    }
}
