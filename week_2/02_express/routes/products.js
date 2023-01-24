const express = require("express");
const router = express.Router();
const products = require("../products");

router.use((req, res, next) => {
  console.log("In products");
  next();
});

router.get("/", async (req, res) => {
  const all = await products.getAll();
  res.json(all);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const prod = await products.getById(id);
  res.json(prod);
});

router.post("/", async (req, res) => {
  const { price, name } = req.body;
  await products.create(price, name);
  res.status(201).end();
});

module.exports = router;
