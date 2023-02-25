const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logOutUser,
  verifyEmail,
  resendEmail,
} = require("../../controllers");
const { auth } = require("../../middlewares/auth");
const { validateRequest } = require("../../middlewares/validator");
const {
  schemaRegister,
  schemaLogin,
  schemaConfirmEmail,
} = require("../../models/user");

router.post("/registration", validateRequest(schemaRegister), registerUser);
router.post("/login", validateRequest(schemaLogin), loginUser);
router.post("/logout", auth, logOutUser);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/resend", validateRequest(schemaConfirmEmail), resendEmail);

module.exports = router;
