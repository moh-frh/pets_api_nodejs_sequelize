const userDao = require("../dao/user.dao");
var userController = {
  addUser: addUser,
  findUsers: findUsers,
  findUserById: findUserById,
  updateUser: updateUser,
  deleteById: deleteById,
};

function addUser(req, res) {
  let user = req.body;
  userDao
    .create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function findUserById(req, res) {
  userDao
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
  userDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "User deleted successfully",
        user: data,
      });
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function updateUser(req, res) {
  userDao
    .updateUser(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "User updated successfully",
        user: data,
      });
    })
    .catch((error) => {
      res.status(error.status || 500).send({
        error: error,
      });
    });
}

function findUsers(req, res) {
  userDao
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

module.exports = userController;
