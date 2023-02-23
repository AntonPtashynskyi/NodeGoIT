const { registerUser, logOutUser, loginUser, verifyEmail } = require("./auth");
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
  verifyEmail,
  create,
  deleteById,
  getAll,
  getById,
  updateAvailability,
  updateById,
};
