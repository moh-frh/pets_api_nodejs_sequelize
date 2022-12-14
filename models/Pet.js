const Sequelize = require("sequelize");
const db = require("../config/database");

const Pet = db.define("pet", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  //   image: {
  //     type: Sequelize.BLOB("long"),
  //     allowNull: true,
  //   },
  gender: {
    type: Sequelize.ENUM("male", "female", "not-known"),
    defaultValue: "not-known",
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Pet;
