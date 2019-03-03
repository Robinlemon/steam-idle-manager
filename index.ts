import { DotenvConfigOutput } from 'dotenv';
import DotEnvSafe from 'dotenv-safe';
import GroupIdleModerator from './src/CGroupIdleModerator';

const { parsed }: DotenvConfigOutput = DotEnvSafe.config();
new GroupIdleModerator(parsed);
