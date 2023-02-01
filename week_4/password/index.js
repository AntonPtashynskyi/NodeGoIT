const bcrypt = require("bcryptjs");

const userPassword = "qwerty123";
// hash and shapeImageThreshold:
const hashedPassword = bcrypt.hashSync(userPassword, 10);
console.log("Password from DB", hashedPassword);

//verify, compare password from client with hashed password from server
const res = bcrypt.compareSync(userPassword, hashedPassword);
console.log(res);
