import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import App from "../src/App";

const PORT = (process.env.PORT || 3001) as number;
const app = express();

app.get("/", (req, res) => {
  console.log("req.ip:", req.ip);
  const app = ReactDOMServer.renderToString(<App />);
  // const app = ReactDOMServer.renderToString(React.createElement(App));
  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf8", (error, data) => {
    if (error) {
      console.error("Something went wrong:", error);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

if (typeof window !== "undefined") {
  console.log("You are on the browser");
} else {
  console.log("You are on the server");
}
