const authService = require("../services/auth.service");

const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
  } catch (error) {}
};

module.exports = {
  registerUser,
};
