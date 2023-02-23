const { User } = require("../models/user");
const { createError } = require("../../errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../helpers/env");

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

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Pleas enter valid login or password");
  }
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw createError(401, "Pleas enter valid login or password");
  }

  const payload = {
    id: user._id,
    role: user.role,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user.id, { token });

  return {
    token,
  };
};

const logOutUser = async (id) => {
  await User.findByIdAndUpdate(id, { token: null });
};

const authenticateUser = async (token) => {
  try {
    // ! TODO verify Equality tokens from "req" and stored in "DB" tokens.
    const payload = jwt.verify(token, SECRET_KEY);
    const { id } = payload;
    return await User.findById(id);
  } catch (error) {
    return null;
  }
};

module.exports = {
  registerUser,
  loginUser,
  authenticateUser,
  logOutUser,
};
