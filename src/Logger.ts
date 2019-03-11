import Winston, { createLogger, format, transports, config } from 'winston';
import Chalk, { Level } from 'chalk';
import { TransformableInfo } from 'logform';

export enum Levels {
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
    VERBOSE = 'verbose',
    DEBUG = 'debug',
    SILLY = 'silly'
}

export default class Logger {
    protected Name: string = null;
    protected Logger: Winston.Logger;

    constructor(Name?: string) {
        this.Name = Name;
        this.Logger = createLogger({
            level: Levels.SILLY,
            format: format.json(),
            transports: [
                new transports.Console({
                    format: format.printf(this.FormatMessage)
                }) //,
                // new transports.File({
                //     filename: `${this.Name ? this.Name : Date.now()}.log`
                // })
            ]
        });
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
            Chalk.gray(JSON.stringify(Info.object, null, 2) || '')
        ];

        return Message.join(' ').trim();
    };

    public log = (Message: string, Level: Levels = Levels.INFO) =>
        this.Logger.log({
            message: Message,
            level: Level,
            ...(this.Name !== null && { label: this.Name })
        });
}
