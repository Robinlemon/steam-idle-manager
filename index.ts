import { DotenvConfigOutput } from 'dotenv';
import DotEnvSafe from 'dotenv-safe';
import GroupIdleModerator from './src/GroupIdleModerator';
import Logger, { Levels } from './src/Logger';

const GlobalLogger = new Logger('GlobalExceptionTracer');
const { parsed }: DotenvConfigOutput = DotEnvSafe.config();
// tslint:disable-next-line: no-unused-expression
new GroupIdleModerator(parsed);

process.on('unhandledRejection', (Reason: Error) =>
    GlobalLogger.log(Reason.stack, Levels.WARN)
);
