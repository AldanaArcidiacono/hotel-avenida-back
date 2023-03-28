import mongoose from 'mongoose';
import createDebug from 'debug';
import { config } from '../../../config.js';

const debug = createDebug('DBconnect');
const { user, password, cluster, dbName } = config;

export const dbConnect = (env?: string) => {
    const finalEnv = env || process.env.NODE_ENV;
    const finalDBname = finalEnv === 'test' ? dbName + '_Testing' : dbName;

    const uri = `mongodb+srv://${user}:${password}@${cluster}/${finalDBname}?retryWrites=true&w=majority`;
    debug(uri);
    return mongoose.connect(uri);
};
