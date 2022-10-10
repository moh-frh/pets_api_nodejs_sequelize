const category = require("../models/Category");
var categoryDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateCategory: updateCategory,
};

function findAll() {
  return category.findAll();
}

function findById(id) {
  return category.findByPk(id);
}

function deleteById(id) {
  return category.destroy({ where: { id: id } });
}

function create(categ) {
  var newCategory = new category(categ);
  return newCategory.save();
}

function updateCategory(Category, id) {
  var updateCategory = {
    title: Category.title,
    technologies: Category.technologies,
    description: Category.description,
    budget: Category.budget,
    contact_email: Category.contact_email,
  };
  return category.update(updateCategory, { where: { id: id } });
}
module.exports = categoryDao;
