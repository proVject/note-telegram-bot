const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  chatId: {
    type: DataTypes.STRING,
    unique: true,
  },
  right: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  wrong: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
