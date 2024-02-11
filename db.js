require('dotenv').config()
const { Sequelize } = require("sequelize");

const configs = {
  database: process.env.PG_DATABASE,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
}

module.exports = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  {
    connectionString:
      `postgres://${configs.username}:${configs.password}@${configs.host}:${configs.port}/${configs.database}`,
    protocol: "postgres",
    dialectOptions: {
      ssl: false
    },
    host: configs.host,
    port: configs.port,
    dialect: "postgres",
  }
);
