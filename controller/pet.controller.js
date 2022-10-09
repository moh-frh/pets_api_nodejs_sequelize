const petDao = require("../dao/pet.dao");
var petController = {
  addPet: addPet,
  findPets: findPets,
  findPetById: findPetById,
  updatePet: updatePet,
  deleteById: deleteById,
};

function addPet(req, res) {
  let pet = req.body;
  petDao
    .create(pet)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findPetById(req, res) {
  petDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  petDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Pet deleted successfully",
        pet: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function updatePet(req, res) {
  petDao
    .updatePet(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Pet updated successfully",
        pet: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findPets(req, res) {
  petDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = petController;