// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home.jsx").default;
// console.log("Home:", Home);

import "babel-polyfill";
import express from "express";
import {matchRoutes} from "react-router-config";
import proxy from "express-http-proxy";

import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./helpers/routes";

const app = express();

const Port = 3000;

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com/users", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  // const content = renderToString("Test Message");
  const store = createStore(req);
  // console.log("req.ip:", req.ip);

  //* Logic to initialize and load data into the store
  console.log("matchRoutes(Routes, req.path):", matchRoutes(Routes, req.path));

  //* Destructuring below:
  const promises = matchRoutes(Routes, req.path)
    .map(({route}) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, _reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  // console.log("promises:", promises);

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(Port, () => {
  console.log(`Server is listening on port: ${Port}`);
});
