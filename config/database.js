const { Sequelize } = require("sequelize");
const db = new Sequelize("pets_core", "postgres", "Welcome123", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
