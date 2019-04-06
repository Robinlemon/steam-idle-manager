/**
 *  > A TypeScript class and enum that
 *    provides a clean logging solution.
 *  > Built with Chalk and Winston.
 */
import Winston, { createLogger, format, transports, config } from 'winston';
import Chalk from 'chalk';
import { TransformableInfo } from 'logform';
import { inspect } from 'util';

export enum Levels {
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
    VERBOSE = 'verbose',
    DEBUG = 'debug',
    SILLY = 'silly'
}

export default class Logger {
    private Name: string = null;
    private DefaultLevel: Levels;
    private Logger: Winston.Logger;

    constructor(
        Name?: string,
        LoggingLevel?: Levels,
        DefaultType = Levels.INFO
    ) {
        this.Name = Name;
        this.DefaultLevel = DefaultType;

        this.Logger = createLogger({
            level: LoggingLevel
                ? LoggingLevel
                : process.env.NODE_ENV === 'production'
                ? 'info'
                : 'silly',
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

    public log = (Message: any, Level?: Levels) => {
        if (Message instanceof Error)
            Message = new Error(Message.message).stack;
        else if (Message instanceof Object || Message instanceof Array)
            Message = inspect(Message, {
                depth: 10,
                colors: true,
                compact: true
            });

        this.Logger.log({
            message: Message,
            level: Level ? Level : this.DefaultLevel,
            ...(this.Name !== null && { label: this.Name })
        });
    };
}
