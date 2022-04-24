// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home.jsx").default;
// console.log("Home:", Home);

import express from "express";
import renderer from "./helpers/renderer";

const app = express();

app.use(express.static("public"));

const Port = 3000;

app.get("/", (req, res) => {
  // const content = renderToString("Test Message");
  console.log("req.ip:", req.ip);

  res.send(renderer());
});

app.listen(Port, () => {
  console.log(`Server is listening on port: ${Port}`);
});
