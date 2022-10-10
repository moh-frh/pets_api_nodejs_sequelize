const characteristicDao = require("../dao/characteristic.dao");
var characteristicController = {
  addCharacteristic: addCharacteristic,
  findCharacteristics: findCharacteristics,
  findCharacteristicById: findCharacteristicById,
  updateCharacteristic: updateCharacteristic,
  deleteById: deleteById,
};

function addCharacteristic(req, res) {
  let characteristic = req.body;
  characteristicDao
    .create(characteristic)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function findCharacteristicById(req, res) {
  characteristicDao
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
  characteristicDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Characteristic deleted successfully",
        characteristic: data,
      });
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function updateCharacteristic(req, res) {
  characteristicDao
    .updateCharacteristic(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Characteristic updated successfully",
        characteristic: data,
      });
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function findCharacteristics(req, res) {
  characteristicDao
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

module.exports = characteristicController;
