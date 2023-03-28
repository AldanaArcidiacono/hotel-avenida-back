import { dbConnect } from './db.connect.js';
import mongoose from 'mongoose';
import { config } from '../../../config.js';

const { dbName } = config;

describe('Given the dbConnect function', () => {
    describe('When we call the test environment ', () => {
        test('Then it should make a connection to mongoDB', async () => {
            const result = await dbConnect('dev');
            expect(typeof result).toBe(typeof mongoose);
            expect(mongoose.connection.db.databaseName).not.toContain(
                '_Testing'
            );
            mongoose.disconnect();
        });
    });

    describe('When we call the dev environment ', () => {
        test('Then it should make a connection to mongoDB', async () => {
            const result = await dbConnect();
            expect(typeof result).toBe(typeof mongoose);
            expect(mongoose.connection.db.databaseName).toContain(dbName);
            mongoose.disconnect();
        });
    });
});
