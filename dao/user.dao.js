const User = require("../models/User");
var userDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateUser: updateUser,
};

function findAll() {
  return User.findAll();
}

function findById(id) {
  return User.findByPk(id);
}

function deleteById(id) {
  return User.destroy({ where: { id: id } });
}

function create(user) {
  var newUser = new User(user);
  return newUser.save();
}

function updateUser(user, id) {
  var updateUser = {
    title: user.title,
    technologies: user.technologies,
    description: user.description,
    budget: user.budget,
    contact_email: user.contact_email,
  };
  return User.update(updateUser, { where: { id: id } });
}
module.exports = userDao;
