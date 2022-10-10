const express = require("express");
const router = express.Router();
const petRoutes = require("./pets.route");
const categoryRoutes = require("./categories.route");

router.use("/pets", petRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
