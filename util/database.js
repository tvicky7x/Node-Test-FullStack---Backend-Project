const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: "root",
  password: "tvicky.123",
  database: "node-player-sql",
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
