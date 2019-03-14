import { DotenvConfigOutput } from 'dotenv';
import DotEnvSafe from 'dotenv-safe';
import Logger, { Levels } from './src/Logger';
import GroupIdleModerator from './src/GroupIdleModerator';

const GlobalLogger = new Logger('Global Exception Tracer');
const { parsed }: DotenvConfigOutput = DotEnvSafe.config();
new GroupIdleModerator(parsed);

process.on('unhandledRejection', (Reason: Error) =>
    GlobalLogger.log(Reason.stack, Levels.WARN)
);
