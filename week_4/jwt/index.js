const jwt = require("jsonwebtoken");

// Secret key for "sign" jwt token
const SECRET_KEY = "qwerty123";
const payload = {
  userId: "333",
  admin: false,
};

const token = jwt.sign(payload, SECRET_KEY);
console.log(token);
