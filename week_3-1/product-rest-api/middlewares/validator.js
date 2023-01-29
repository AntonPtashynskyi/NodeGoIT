const { createError } = require("../../errors");

const validateRequest = (scheme) => {
  return (req, res, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      next(createError(400, "Available fields is required"));
    }
    next();
  };
};

module.exports = {
  validateRequest,
};
