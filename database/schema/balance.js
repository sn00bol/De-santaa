async function migrateBalanceSchema(db) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS help_preferences (
            user_id TEXT PRIMARY KEY,
            last_categories TEXT DEFAULT 'all'
        );

        CREATE TABLE IF NOT EXISTS user_settings (
            user_id TEXT NOT NULL,
            setting_id TEXT NOT NULL,
            value INTEGER NOT NULL DEFAULT 0 CHECK (value IN (0, 1)),
            PRIMARY KEY (user_id, setting_id)
        );

        CREATE TABLE IF NOT EXISTS user_activity (
            user_id TEXT PRIMARY KEY,
            last_command_at INTEGER NOT NULL
        );
    `);

    await db.exec(`
        CREATE INDEX IF NOT EXISTS idx_user_settings_setting_value
            ON user_settings (setting_id, value);
        CREATE INDEX IF NOT EXISTS idx_user_activity_last_command
            ON user_activity (last_command_at);
    `);

}

module.exports = { migrateBalanceSchema };
