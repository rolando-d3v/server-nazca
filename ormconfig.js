module.exports = {
   "type": "oracle",
   "host": "10.5.10.10",
   "port": 1521,
   "username": "330496500",
   "password": "123456",
   // "host": process.env.DB_HOST,
   // "port": process.env.DB_PORT,
   // "username": process.env.DB_USERNAME,
   // "password": process.env.DB_PASSWORD,
   // "database": "TRAMITE",
   // "database": "DIEBDDE",
   "connectString": "10.5.10.10/DIEBDDE",
   "sid": "DIEBDDE",
   "synchronize": true,
   "logging": false,
   "entities": [
      "dist/entity/**/*{.ts,.js}"
   ],
   "migrations": [
      "dist/migration/**/*{.ts,.js}"
   ],
   "subscribers": [
      "dist/subscriber/**/*{.ts,.js}"
   ],
   "cli": {
      "entitiesDir": "dist/entity",
      "migrationsDir": "dist/migration",
      "subscribersDir": "dist/subscriber"
   }
}