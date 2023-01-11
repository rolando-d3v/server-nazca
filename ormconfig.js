module.exports = {
  // "port": process.env.DB_PORT,
  // "username": process.env.DB_USERNAME,
  // "password": process.env.DB_PASSWORD,
  // "database": "TRAMITE",
  type: "postgres",
  port: 5432,
  username: "postgres",
  host: "localhost",
  database: "PORTAL_CIE",
  password: "Rolando",
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
