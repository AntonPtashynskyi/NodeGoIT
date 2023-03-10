const express = require("express");
const cors = require("cors");
require("dotenv").config();
const logger = require("morgan");

const app = express();
const productsRouter = require("./routes/products");

app.use(cors());
app.use(express.json());
app.use(logger(process.env.NODE_ENV === "development" ? "dev" : "tiny"));

app.use("/api/v1/products", productsRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Ups, page not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json(message);
});

module.exports = app;
