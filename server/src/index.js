// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home.jsx").default;
// console.log("Home:", Home);

import "babel-polyfill";
import express from "express";
import {matchRoutes} from "react-router-config";

import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./helpers/routes";

const app = express();

app.use(express.static("public"));

const Port = 3000;

app.get("*", (req, res) => {
  // const content = renderToString("Test Message");
  const store = createStore();
  console.log("req.ip:", req.ip);

  //* Logic to initialize and load data into the store
  console.log("matchRoutes(Routes, req.path):", matchRoutes(Routes, req.path));

  //* Destructuring below:
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });
  // console.log("promises:", promises);

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(Port, () => {
  console.log(`Server is listening on port: ${Port}`);
});
