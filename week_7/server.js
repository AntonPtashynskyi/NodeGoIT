const http = require("http");
const WebSocket = require("ws");
const server = http.createServer((req, res) => {
  console.log("http");
});

server.listen(5500, () => {
  console.log("Server start at port 5050");
});

const ws = new WebSocket.Server({ server });

ws.on("connection", (connection, req) => {
  const address = req.socket.remoteAddress;
  console.log(`new client : ${address}`);

  connection.on("message", (message) => {
    for (let client of ws.clients) {
      if (client !== connection) {
        client.send(message, { binary: false });
        // prevent send message to current client
      }
    }
  });

  connection.on("close", () => {
    console.log("Client disconnected");
  });
});
