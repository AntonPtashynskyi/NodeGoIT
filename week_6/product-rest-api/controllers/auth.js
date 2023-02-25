const authService = require("../services/auth.service");
const { createError } = require("../../errors");
const { emailsService, userService } = require("../services");

const registerUser = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    const { name, email, role, id, avatarUrl, verificationToken } = user;

    await emailsService.sendEmail(email, verificationToken);

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
    const response = await authService.logOutUser(req.user._id);
    if (!response) {
      throw createError(500, "Something went wrong on server");
    }
    res.status(204).json({ message: "User was logout" });
  } catch (error) {
    next(error);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await userService.findUserByOneFilter({ verificationToken });

    if (!user) {
      throw createError(404, "User Not found");
    }
    const updatedUser = await userService.updateUser(user._id, {
      verify: true,
      verificationToken: null,
    });

    res
      .status(200)
      .json({ message: "Verification successful", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logOutUser,
  verifyEmail,
};
