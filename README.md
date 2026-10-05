<p align="center">
  <img width="300" height="300" alt="Santaa Bot Logo" src="https://github.com/user-attachments/assets/1804bf80-6b57-4d55-8345-a3eb55386cb1" />
</p>

<p align="center">
  <strong>A lightweight, lightning-fast Discord bot built for easy customization using 100% Javascript</strong>
</p>

<p align="center">
  <a href="#FEATURES">FEATURES</a> ·
  <a href="#SETUP">SETUP</a> ·
  <a href="docs/GUIDE.md">BOT GUIDE</a>
</p>

---

## FEATURES
- Highly debloated version of Santaa v1.3.0 only keep `help` and `ping`
- Database only keep settings repository and balance schema
- Only keep the root of bot, which is mean: No cooldown, no auto-notification, no owner checker, auto-update...

## SETUP
### PREREQUISITES

Before do anything:

1. Node.js v16 or higher
2. Git to clone the repository
3. Docker Desktop latest version
4. Your discord bot token
5. Enable intents in Discord Developer Portal

> **Note on Databases:**  
> Currently bot using SQlite due to minimal usage, the bot may not operate stably when running "very" many servers, so switching to another SQL is recommended (required to change a lot database)

### Regularly Setup
1. Get source code:
```bash
git clone https://github.com/sn00bol/De-santaa.git
cd Santaa
cp .env.example .env
```

set `DISCORD_BOT_API_KEY`, `PFX` as required.

2. Build and start the container
```bash
docker compose up --build -d
```

Checking bot status, shut down or restart we usually use these:
```bash
docker compose logs -f bot       # Getting bot logs

docker compose ps                # Container status

docker compose down              # Shutdown bot

docker compose restart           # Restart bot
```
Also you can manage your bot via Docker Desktop

Now your bot is alive and enjoy!

### For Developer
If you're planning to modify Santaa, add commands, develop features, or debug the bot, running it directly with Node.js is recommended instead of Docker

(Do step 1. and step 2. in FOR NON-DEVELOPER)

Now, because docker currently running simillar like npm run start which is mean there no fast cooldown support so I prefer you to use traditional `npm run`, there three ways to use it:
```
npm run start  # daily usage

npm run dev    # Supporting fast cooldown

npm run test   # test if it's bugging or not
```

Cautions:
`npm run test` only run like this: 
```bash
PS D:\Santaa> npm run test

> santaa@1.3.0 test
> node --test

ℹ tests 0
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 101.1713
PS D:\Santaa> 
```
To more advance test, please create `/test` folder and its `*.test.js` file for more advance

Also, you could read more details about docker, check it [here](docs/instruction/Docker.md).

## LICENSE
Santaa is using Apache v2.0 License, see [LICENSE](LICENSE) for more details

---
thx for read ts, have a gut day bradar
<p align="left">
  <a href="docs/CHANGELOG.md">CHANGELOG</a> ·
  <a href="docs/ISSUES.md">KNOWN ISSUES</a> 
</p>
