const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { token } = require("morgan");
const gravatar = require("gravatar");

const authSchema = new Schema(
  {
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
    token: {
      type: String,
      default: null,
    },
    avatarUrl: {
      type: String,
      default: function () {
        return gravatar.url(
          this.email,
          { s: "200", r: "pg", d: "retro" },
          true
        );
      },
    },
  },
  { timestamps: true }
);

const User = model("auth", authSchema);

// .regex(^[^s@]+@[^s@]+.[^s@]+$")
const schemaRegister = Joi.object({
  name: Joi.string().min(3).max(12).required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "employee"),
});

const schemaLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  User,
  schemaRegister,
  schemaLogin,
};

// phone    : { type: String,/*not required by default**/
//             validate: {
//                 validator: function(v) {
//                     var re = /^\d{10}$/;
//                     return (!v || !v.trim().length) || re.test(v)
//                 },
//                 message: 'Provided phone number is invalid.'
//             }
