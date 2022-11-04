module.exports = {
   "type": "oracle",
   "host": "10.5.10.10",
<<<<<<< HEAD
   "port": 1521,
   "username": "330496500",
=======
   "port":  1521,
   "username": "tramite",
>>>>>>> fa6be70bd7f02e48d2da1866dbb83f0b541f5ed8
   "password": "123456",
   // "host": process.env.DB_HOST,
   // "port": process.env.DB_PORT,
   // "username": process.env.DB_USERNAME,
   // "password": process.env.DB_PASSWORD,
   // "database": "TRAMITE",
   // "database": "DIEBDDE",
<<<<<<< HEAD
   "connectString": "10.5.10.10/DIEBDDE",
   "sid": "DIEBDDE",
   "synchronize": true,
=======
   "sid": "xe",
   "synchronize": false,
>>>>>>> fa6be70bd7f02e48d2da1866dbb83f0b541f5ed8
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