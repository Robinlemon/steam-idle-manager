import Winston, { createLogger, format, transports, config } from 'winston';
import Chalk, { Level } from 'chalk';
import { TransformableInfo } from 'logform';

export enum Levels {
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
    VERBOSE = 'verbose',
    DEBUG = 'debug',
    SILLY = 'silly',
}

export default class Logger {
    protected Name: string = null;
    protected Logger: Winston.Logger;

    constructor(Name?: string) {
        this.Name = Name;
        this.Logger = createLogger({
            level: Levels.SILLY,
            format: format.json(),
            transports: [],
        });

        this.Logger.add(
            new transports.Console({
                format: format.printf(this.FormatMessage),
            }),
        );
    }

    private FormatMessage = (Info: TransformableInfo): string => {
        const NPMColors: any = config.npm.colors;
        const Color: string = NPMColors[Info.level];
        const ColorFunc: any = (Chalk as any)[Color];

        const Message = [
            Chalk.gray(new Date().toLocaleString()),
            ColorFunc(Info.level.toUpperCase().padEnd(7)) +
                (this.Name !== null ? Chalk.gray(` [${this.Name}] `) : ''),
            Info.message,
            Chalk.gray(JSON.stringify(Info.object, null, 2) || ''),
        ];

        return Message.join(' ').trim();
    };

    public log = (Config: Winston.LogEntry) =>
        this.Logger.log({
            ...Config,
            ...(this.Name !== null && { label: this.Name }),
        });
}
