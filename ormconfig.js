module.exports = {
   "type": "better-sqlite3",
   // "host": process.env.DB_HOST,
   // "port": process.env.DB_PORT,
   // "username": process.env.DB_USERNAME,
   // "password": process.env.DB_PASSWORD,
   "database": "./src/data/examenAscenso.db",
   "synchronize": true,
   "logging": false,
   "entities": [
      "dist/entity/**/*{.ts,.js}"
   ],
   // "migrations": [
   //    "dist/migration/**/*{.ts,.js}"
   // ],
   // "subscribers": [
   //    "dist/subscriber/**/*{.ts,.js}"
   // ],
   // "cli": {
   //    "entitiesDir": "dist/entity",
   //    "migrationsDir": "dist/migration",
   //    "subscribersDir": "dist/subscriber"
   // }
}