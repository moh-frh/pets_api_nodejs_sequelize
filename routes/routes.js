const express = require("express");
const router = express.Router();
const petRoutes = require("./pets.route");
const categoryRoutes = require("./categories.route");
const userRoutes = require("./users.route");
const characteristicRoutes = require("./characteristics.route");

router.use("/pets", petRoutes);
router.use("/categories", categoryRoutes);
router.use("/users", userRoutes);
router.use("/characteristics", characteristicRoutes);

module.exports = router;
