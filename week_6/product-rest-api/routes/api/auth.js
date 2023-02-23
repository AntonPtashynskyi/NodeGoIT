const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logOutUser,
  verifyEmail,
} = require("../../controllers");
const { auth } = require("../../middlewares/auth");
const { validateRequest } = require("../../middlewares/validator");
const { schemaRegister, schemaLogin } = require("../../models/user");

router.post("/registration", validateRequest(schemaRegister), registerUser);
router.post("/login", validateRequest(schemaLogin), loginUser);
router.post("/logout", auth, logOutUser);
router.get("/verify/:verificationToken", verifyEmail);

module.exports = router;
