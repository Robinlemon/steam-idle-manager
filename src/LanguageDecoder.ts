import Logger, { Levels } from './Logger';
import INamespaceMap from './Locale/INamespaces';
import { promises as fsPromises } from 'fs';

export type ENamespaces = keyof INamespaceMap;

export default class LanguageDecoder {
    private FailSafeString = "Sorry, I don't have a response for you!";

    private LanguageData: INamespaceMap;
    private Logger: Logger;

    private InternalPromise: Promise<void>;
    private ResolveInternalPromise: () => void;

    constructor() {
        this.Logger = new Logger(this.constructor.name);

        this.InternalPromise = new Promise(Resolve => {
            this.ResolveInternalPromise = Resolve;
        });

        this.Logger.log(`Loading locale files...`, Levels.VERBOSE);
        this.LoadLanguage('English');
    }

    public GetInternalPromise = () => this.InternalPromise;

    public GetString(Namespace: ENamespaces) {
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

    private async LoadLanguage(LanguageName: string): Promise<void> {
        try {
            this.LanguageData = (await import(`./Locale/${LanguageName}.ts`))[
                'default'
            ];

            this.Logger.log(JSON.stringify(this.LanguageData, null, 2));
            this.Logger.log(`Loaded ${LanguageName} Locale`, Levels.VERBOSE);
        } catch {
            this.Logger.log(
                new Error(`Error parsing ${LanguageName} locale`).stack,
                Levels.ERROR
            );
        }

        this.ResolveInternalPromise();
    }
}
