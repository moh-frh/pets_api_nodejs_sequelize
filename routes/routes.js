const express = require("express");
const router = express.Router();
const petRoutes = require("./pets.route");

router.use("/pets", petRoutes);
module.exports = router;
