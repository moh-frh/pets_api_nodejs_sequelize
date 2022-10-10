const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category.controller");

// ******* categories api
router.post("/", categoryController.addCategory);
router.get("/", categoryController.findCategories);
router.get("/:id", categoryController.findCategoryById);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteById);

module.exports = router;
