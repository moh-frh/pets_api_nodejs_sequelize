const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

//Database Connection
const db = require("./config/database");
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));

// routes
app.use("/", require("./routes/routes"));

const PORT = process.env.PORT || 5000;
db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));

// ****************************************************************************************************
const Pet = require("./models/Pet.js");
const Category = require("./models/Category.js");
const User = require("./models/User.js");
const Characteristic = require("./models/Characteristic");

Category.hasMany(Pet);
Pet.belongsTo(Category);

User.hasMany(Pet);
Pet.belongsTo(User);

Characteristic.belongsToMany(Pet, { through: "PetCaracteristic" });
Pet.belongsToMany(Characteristic, { through: "PetCaracteristic" });

module.exports = { Pet, Category, User, Characteristic };
// ****************************************************************************************************
