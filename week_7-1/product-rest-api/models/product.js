const { Schema, model } = require("mongoose");
const Joi = require("joi");

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  code: {
    type: Number,
    required: true,
  },
  createdBy: {
    ref: "auth",
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const schemeCreate = Joi.object({
  price: Joi.number().min(0).required(),
  name: Joi.string().min(3).required(),
  code: Joi.number(),
  available: Joi.boolean(),
});

const schemePathAvailable = Joi.object({
  available: Joi.bool().required,
});

const Product = model("product", schema);

module.exports = {
  Product,
  schemePathAvailable,
  schemeCreate,
};
