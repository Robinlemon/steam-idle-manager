/**
 *  > A TypeScript class and enum that
 *    provides a clean logging solution.
 *  > Built with Chalk and Winston.
 */
import Chalk from 'chalk';
import { TransformableInfo } from 'logform';
import { inspect } from 'util';
import Winston, { config, createLogger, format, transports } from 'winston';

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

        const LogTypeMap: any = {
            production: Levels.INFO,
            test: Levels.DEBUG
        };

        const Environment: string = process.env.NODE_ENV;
        const ExistsInMap = Object.keys(LogTypeMap).includes(Environment);
        const LogLevel = ExistsInMap ? LogTypeMap[Environment] : Levels.SILLY;

        this.Logger = createLogger({
            level: LoggingLevel ? LoggingLevel : LogLevel,
            format: format.json(),
            transports: [
                new transports.Console({
                    format: format.printf(this.FormatMessage)
                }) // ,
                // new transports.File({
                //     filename: `${this.Name ? this.Name : Date.now()}.log`
                // })
            ]
        });
    }

    public log = (Message: any, Level?: Levels) => {
        if (Message instanceof Error) {
            Message = new Error(Message.message).stack;
        } else if (Message instanceof Object || Message instanceof Array) {
            Message = inspect(Message, {
                depth: 10,
                colors: true,
                compact: true
            });
        }

        this.Logger.log({
            message: Message,
            level: Level ? Level : this.DefaultLevel,
            ...(this.Name !== null && { label: this.Name })
        });
    };

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
}
