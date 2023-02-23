const { User } = require("../models/user");

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

const findUserByOneFilter = async (filter) => {
  return await User.findOne(filter);
};

module.exports = {
  updateUser,
  findUserByOneFilter,
};
