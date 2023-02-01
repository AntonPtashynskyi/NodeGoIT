const authService = require("../services/auth.service");
const { createError } = require("../../errors");

const registerUser = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    const { name, email, role } = user;

    if (!user) {
      throw createError(400, "Something went wrong");
    }

    res.json({ name, email, role, id: user.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
};
