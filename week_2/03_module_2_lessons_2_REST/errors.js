// class

// class ValidationError extends Error {
//   constructor(status, message) {
//     super(message);
//     this.status = status;
//   }
// }

// module.exports = {
//   ValidationError,
// };

// Functions

const createError = (status, message) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

module.exports = {
  createError,
};
