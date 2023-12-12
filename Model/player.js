const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const player = sequelize.define("players", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
  birthday: DataTypes.DATE,
  birthplace: DataTypes.STRING,
  profile: DataTypes.TEXT,
});

player.sync();

module.exports = player;
