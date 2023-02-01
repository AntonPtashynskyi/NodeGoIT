const { User } = require("../models/user");
const { createError } = require("../../errors");
const bcrypt = require("bcryptjs");

const registerUser = async (userData) => {
  const result = await User.findOne({ email: userData.email });

  if (result) {
    throw createError(409, "User already exist!");
  }

  const password = userData.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ ...userData, password: hashedPassword });

  return user;
};

module.exports = {
  registerUser,
};
