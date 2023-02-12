const { createError } = require("../../errors");

const validateRequest = (scheme) => {
  return (req, res, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      next(createError(400, error.message));
    }
    next();
  };
};

module.exports = {
  validateRequest,
};
