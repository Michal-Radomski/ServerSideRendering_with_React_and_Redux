import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";

const server = express();

const Port: number = 3000;

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static")));

const manifest = fs.readFileSync(path.join(__dirname, "static/manifest.json"), "utf-8");
const assets = JSON.parse(manifest);

server.get("/", (req, res) => {
  console.log("req.ip:", req.ip);
  // res.send("<h1>Hello from Server</h1>");
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render("client", {assets, component});
});

server.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});
