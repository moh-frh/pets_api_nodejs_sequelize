const express = require("express");
const router = express.Router();
const petController = require("../controller/pet.controller");

// ******* pets api
router.post("/", petController.addPet);
router.get("/", petController.findPets);
router.get("/:id", petController.findPetById);
router.put("/:id", petController.updatePet);
router.delete("/:id", petController.deleteById);

module.exports = router;
