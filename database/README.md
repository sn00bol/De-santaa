The active database code stores help preferences and user settings in `balance.db`. Legacy economy and RPG tables or database files are not read by the current bot, but migrations do not drop them or delete existing database files.

For a consistent live Docker backup, create `.backups/` and run `docker compose --profile tools run --rm backup` from the project root. The backup service mounts `database/` read-only, snapshots SQLite databases through SQLite's backup API, and excludes `.env` files.

Stop the bot before restoring a backup. Do not run the Docker bot and host `npm` bot at the same time: both write to the same SQLite database. Keep at least one backup copy off the machine running Docker.