const express = require("express");
const logger = require("morgan");
const app = express();
const { sweetsRouter, workersRouter } = require("./routes/index");

app.use(express.json(), logger("dev"));

app.use("/api/v1/sweets", sweetsRouter);
app.use("/api/v1/workers", workersRouter);

module.exports = app;
