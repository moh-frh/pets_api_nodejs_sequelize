const categoryDao = require("../dao/category.dao");
var categoryController = {
  addCategory: addCategory,
  findCategories: findCategories,
  findCategoryById: findCategoryById,
  updateCategory: updateCategory,
  deleteById: deleteById,
};

function addCategory(req, res) {
  let category = req.body;
  categoryDao
    .create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function findCategoryById(req, res) {
  categoryDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function deleteById(req, res) {
  categoryDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Category deleted successfully",
        category: data,
      });
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function updateCategory(req, res) {
  categoryDao
    .updateCategory(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Category updated successfully",
        category: data,
      });
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function findCategories(req, res) {
  categoryDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

module.exports = categoryController;
