const { createError } = require("../../errors");
const { authenticateUser } = require("../services/auth.service");

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    next(createError(401, "Token should be provided"));
  }

  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    next(createError(401));
  }
  const user = await authenticateUser(token);

  if (!user || !user.token) {
    next(createError(401, "Token don't confirm"));
  }
  req.user = user;

  next();
};

const author = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      next(createError(403, "Forbidden"));
    }
    next();
  };
};

module.exports = {
  auth,
  author,
};
