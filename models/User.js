const Sequelize = require("sequelize");
const db = require("../config/database");

const phoneValidationRegex = /0([5-6]|[7])(\d{8})/;

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      validator: function (v) {
        return phoneValidationRegex.test(v);
      },
    },
  },
  gender: {
    type: Sequelize.ENUM("male", "female"),
    defaultValue: "male",
  },
  wilaya: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gps: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
