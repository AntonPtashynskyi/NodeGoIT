const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailPattern = "^[^s@]+@[^s@]+.[^s@]+$";

const authSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "employee"],
    default: "employee",
  },
});

const User = model("auth", authSchema);

const schemaRegister = Joi.object({
  name: Joi.string().min(3).max(12).required(),
  email: Joi.string().pattern(emailPattern).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "employee"),
});

module.exports = {
  User,
  schemaRegister,
};

// phone    : { type: String,/*not required by default**/
//             validate: {
//                 validator: function(v) {
//                     var re = /^\d{10}$/;
//                     return (!v || !v.trim().length) || re.test(v)
//                 },
//                 message: 'Provided phone number is invalid.'
//             }
