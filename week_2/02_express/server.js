const express = require("express");
const cors = require("cors");
const server = express();

const productsRouter = require("./routes/products");

// server.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });
server.use(cors());
server.use(express.json());
server.use("/products", productsRouter);

server.get("/", (req, res) => {
  res.send("Hello Express");
});

server.use((req, res, next) => {
  res.status(404).json({ message: "Ups, not found" });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});
