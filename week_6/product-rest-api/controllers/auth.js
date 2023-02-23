const authService = require("../services/auth.service");
const { createError } = require("../../errors");

const registerUser = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    const { name, email, role, id, avatarUrl } = user;

    if (!user) {
      throw createError(400, "Something went wrong");
    }

    res.status(201).json({ name, email, role, id, avatarUrl });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await authService.loginUser(req.body);
    if (!user) {
      throw createError(401, "Something went wrong");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

const logOutUser = async (req, res, next) => {
  try {
    await authService.logOutUser(req.user._id);
    res.status(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logOutUser,
};
