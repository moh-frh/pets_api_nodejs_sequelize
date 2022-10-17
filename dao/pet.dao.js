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
    attributes: { exclude: ["userId", "categoryId"] },
    include: [
      {
        model: User,
        // attributes: { exclude: ["id"] },
        // required: true,
      },
      {
        model: Category,
        required: true,
      },
    ],
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
    name: pet.name,
    age: pet.age,
    gender: pet.gender,
    description: pet.description,
    address: pet.address,
  };
  return Pet.update(updatePet, { where: { id: id } });
}
module.exports = petDao;
