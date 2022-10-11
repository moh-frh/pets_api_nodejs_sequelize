const Pet = require("../models/Pet");
const Category = require("../models/Category");
const User = require("../models/User");

var petDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updatePet: updatePet,
};

function findAll() {
  return Pet.findAll({
    include: [{ model: User, Category }],
  });
}

function findById(id) {
  return Pet.findByPk(id);
}

function deleteById(id) {
  return Pet.destroy({ where: { id: id } });
}

function create(pet) {
  var newPet = new Pet(pet);
  return newPet.save();
}

function updatePet(pet, id) {
  var updatePet = {
    title: pet.title,
    technologies: pet.technologies,
    description: pet.description,
    budget: pet.budget,
    contact_email: pet.contact_email,
  };
  return Pet.update(updatePet, { where: { id: id } });
}
module.exports = petDao;
