const express = require("express");
const Joi = require("joi");
const products = require("../products");
// const { ValidationError } = require("../errors");
const { createError } = require("../errors");
const router = express.Router();

const scheme = Joi.object({
  price: Joi.number().min(0.1).required(),
  name: Joi.string().min(3).required,
});

router.get("/", async (req, res, next) => {
  try {
    const all = await products.getAll();
    res.json(all);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const prod = await products.getById(id);
    if (!prod) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json(prod);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = scheme.validate(req.body);
    if (error) {
      // 1. res.status(400).json({ message: error }); // First variation!

      // 2. const e = new Error();
      // e.status = 400;
      // e.message = error.message;
      // throw e;

      // 3. Generate error with class
      throw createError(400, error.message);
    }
    const { price, name } = req.body;
    const product = await products.create(price, name);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = scheme.validate(req.body);
    if (error) {
      res.status(400).json({ message: error });
    }

    const { id } = req.params;
    const { price, name } = req.body;
    const updatedProd = await products.updateById(id, price, name);
    if (!updatedProd) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json(updatedProd);
    }
  } catch (error) {
    next(error);
    // res.status(500).json({ message: "Internal server Error" });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProd = await products.deleteProduct(id);

    if (deletedProd) {
      res.json(`{"message": "contact with id ${id} deleted"}`);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
