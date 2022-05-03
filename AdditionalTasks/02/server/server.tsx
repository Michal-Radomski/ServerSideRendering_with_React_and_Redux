import express from "express";
import * as ReactDOMServer from "react-dom/server";
import App from "../client/App";
import React from "react";

const app = express();

const Port: number = 3000;

app.get("/", (req, res) => {
  console.log("req.ip:", req.ip);

  const reactApp: string = ReactDOMServer.renderToString(<App />);
  // const reactApp: string = ReactDOMServer.renderToString(React.createElement(App)); //* Another way
  const html: string = `
        <html lang="en">
        <head>
            <script src="app.js" async defer></script>
        </head>
        <body style="background-color: lightYellow">
        <h1>h1 - test from server.tsx</h1>
        <div id="root">${reactApp}</div>
        </body>
        </html>
    `;
  res.send(html);
});

app.use(express.static("./built"), () => {
  console.log("./built is being sending");
});

app.listen(Port, () => {
  console.log(`Server in listening on port: ${Port}`);
});
