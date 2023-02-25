const {
  registerUser,
  logOutUser,
  loginUser,
  verifyEmail,
  resendEmail,
} = require("./auth");
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
  resendEmail,
  create,
  deleteById,
  getAll,
  getById,
  updateAvailability,
  updateById,
};
