const { registerUser, logOutUser, loginUser } = require("./auth");
const {
  create,
  deleteById,
  getAll,
  getById,
  updateAvailability,
  updateById,
} = require("./products");
module.exports = {
  registerUser,
  logOutUser,
  loginUser,
  create,
  deleteById,
  getAll,
  getById,
  updateAvailability,
  updateById,
};
