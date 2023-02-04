const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../../controllers/auth");
const { auth } = require("../../middlewares/auth");
const { validateRequest } = require("../../middlewares/validator");
const { schemaRegister, schemaLogin } = require("../../models/user");

router.post("/registration", validateRequest(schemaRegister), registerUser);
router.post("/login", validateRequest(schemaLogin), loginUser);
router.post("/logout", auth, logOutUser);

module.exports = router;
