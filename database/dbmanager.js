const { openDatabase } = require('./connection');
const { migrateBalanceSchema } = require('./schema/balance');
const { createSettingsRepository } = require('./repositories/settingsRepository');

let db;
const getDatabase = () => db;
const settingsRepository = createSettingsRepository(getDatabase);

module.exports = {
    async init() {
        if (db) return;
        const database = await openDatabase('./database/balance.db');
        try {
            await migrateBalanceSchema(database);
            db = database;
        } catch (error) {
            await database.close();
            throw error;
        }
    },

    ...settingsRepository,

    async close() {
        if (!db) return;
        const activeDatabase = db;
        db = null;
        await new Promise((resolve, reject) => {
            activeDatabase.close(error => error ? reject(error) : resolve());
        });
    },
};
