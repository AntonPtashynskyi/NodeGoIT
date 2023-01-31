const express = require("express");
const router = express.Router();
const { registerUser } = require("../../controllers/auth");
const { validateRequest } = require("../../middlewares/validator");
const { schemaRegister } = require("../../models/user");

router.post("/registration", validateRequest(schemaRegister), registerUser);

module.exports = router;
