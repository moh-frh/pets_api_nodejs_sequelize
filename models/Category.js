const Sequelize = require("sequelize");
const db = require("../config/database");

const Category = db.define("category", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // image: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
});

module.exports = Category;
