import Logger, { Levels } from './Logger';
import INamespaceMap from './Locale/INamespaces';
import { promises as fsPromises } from 'fs';

export type ENamespaces = keyof INamespaceMap;

export default class LanguageDecoder {
    private FailSafeString = "Sorry, I don't have a response for you!";

    private LanguageData: INamespaceMap;
    private Logger: Logger;

    constructor() {
        this.Logger = new Logger(this.constructor.name);

        this.Logger.log(`Loading locale files...`, Levels.VERBOSE);
        this.LoadLanguage('English.json');
    }

    public GetString(Namespace: ENamespaces) {
        if (Namespace in this.LanguageData) return this.LanguageData[Namespace];
        else return this.FailSafeString;
    }

    private async LoadLanguage(Path: string): Promise<void> {
        const LanguageName = Path.split('.')[0];
        const FileData = await fsPromises.readFile(Path);

        try {
            this.LanguageData = JSON.parse(FileData.toString());
            this.Logger.log(`Loaded ${LanguageName} Locale`, Levels.VERBOSE);
        } catch {
            this.Logger.log(
                new Error(`Malformed JSON structure for ${LanguageName}`).stack,
                Levels.ERROR
            );
        }
    }
}
