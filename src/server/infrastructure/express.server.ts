import express, { Express } from 'express';
import createDebug from 'debug';
import { dbConnect } from './db/db.connect';
import mongoose from 'mongoose';

const debug = createDebug('ExpressServer');

export default class ExpressServer {
    app: Express;
    constructor() {
        this.app = express();
        this.config();
    }

    config(): void {
        this.app.use(express.json());
    }

    start(port: number): void {
        dbConnect().then((mongoose) => {
            this.app.listen(port, () => {
                debug(
                    `Listening on port ${port}`,
                    mongoose.connection.db.databaseName
                );
            });
        });
    }
}
