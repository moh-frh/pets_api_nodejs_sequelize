const Characteristic = require("../models/Characteristic");
var characteristicDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateCharacteristic: updateCharacteristic,
};

function findAll() {
  return Characteristic.findAll();
}

function findById(id) {
  return Characteristic.findByPk(id);
}

function deleteById(id) {
  return Characteristic.destroy({ where: { id: id } });
}

function create(characteristic) {
  var newCharacteristic = new Characteristic(characteristic);
  return newCharacteristic.save();
}

function updateCharacteristic(characteristic, id) {
  var Cpdatecharacteristic = {
    name: characteristic.name,
    description: characteristic.description,
  };
  return Characteristic.update(Cpdatecharacteristic, { where: { id: id } });
}
module.exports = characteristicDao;
