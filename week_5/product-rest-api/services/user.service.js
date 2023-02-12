const { User } = require("../models/user");

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  updateUser,
};
