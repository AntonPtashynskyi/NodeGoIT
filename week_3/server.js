const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const { PORT = 3000, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("DB is working");
  })
  .then(() => {
    console.log(`Server start at port ${PORT}`);
  })
  .catch((e) => {
    console.log("Error >>>", e);
    process.exit(1);
  });
