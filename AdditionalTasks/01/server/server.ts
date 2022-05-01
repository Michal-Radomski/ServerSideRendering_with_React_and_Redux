import express from "express";

const server = express();

const Port: number = 3000;

server.get("/", (req, res) => {
  console.log("req.ip:", req.ip);
  res.send("<h1>Hello from Server</h1>");
});

server.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});
