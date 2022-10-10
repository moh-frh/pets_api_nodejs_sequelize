const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// ******* users api
router.post("/", userController.addUser);
router.get("/", userController.findUsers);
router.get("/:id", userController.findUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteById);

module.exports = router;
