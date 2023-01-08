module.exports = {
  // "port": process.env.DB_PORT,
  // "username": process.env.DB_USERNAME,
  // "password": process.env.DB_PASSWORD,
  // "database": "TRAMITE",
  type: "postgres",
  port: 3306,
  username: "rolando",
  host: process.env.DB_HOST,
  database: "portal",
  password: "123456",
  synchronize: true,

  logging: false,
  entities: ["dist/entity/**/*{.ts,.js}"],
  migrations: ["dist/migration/**/*{.ts,.js}"],
  subscribers: ["dist/subscriber/**/*{.ts,.js}"],
  cli: {
    entitiesDir: "dist/entity",
    migrationsDir: "dist/migration",
    subscribersDir: "dist/subscriber",
  },
};
