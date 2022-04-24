// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home.jsx").default;
// console.log("Home:", Home);

import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public"));

const Port = 3000;

app.get("/", (req, res) => {
  // const content = renderToString("Test Message");
  console.log("req.ip:", req.ip);
  const content = renderToString(<Home />);
  // console.log("content:", content);

  const html = `
<html>
<head></head>

<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
</html>
`;

  // res.send(content);
  res.send(html);
});

app.listen(Port, () => {
  console.log(`Server is listening on port: ${Port}`);
});
