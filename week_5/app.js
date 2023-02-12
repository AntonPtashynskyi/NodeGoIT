const express = require("express");
const logger = require("morgan");
const app = express();
const sweetsRouter = require("./product-rest-api/routes/api/products");
const authRouter = require("./product-rest-api/routes/api/auth");
const usersRouter = require("./product-rest-api/routes/api/users");

app.use(express.json(), logger("dev"));
app.use(express.static("./product-rest-api/public"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", sweetsRouter);

app.use((req, res, next) => {
  next({ status: 404, message: "Ups, page not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json(message);
});

module.exports = app;
