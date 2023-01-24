const http = require("http");
const products = require("./products");

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  //   res.setHeader("Access-Control-Allow-Origin", ["http://127.0.0.1:5500"]); // In Array we may type several origins witch can Access to our server
  res.setHeader("Access-Control-Allow-Origin", "*"); // * give access for all

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    console.log("in /");
    res.write("Hello new server");
  } else if (url === "/products" && method === "GET") {
    const allProd = await products.getAll();
    res.write(JSON.stringify(allProd));
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is on in ${PORT}`);
});
