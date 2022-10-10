const express = require("express");
const router = express.Router();
const characteristicController = require("../controller/characteristic.controller");

// ******* characteristics api
router.post("/", characteristicController.addCharacteristic);
router.get("/", characteristicController.findCharacteristics);
router.get("/:id", characteristicController.findCharacteristicById);
router.put("/:id", characteristicController.updateCharacteristic);
router.delete("/:id", characteristicController.deleteById);

module.exports = router;
