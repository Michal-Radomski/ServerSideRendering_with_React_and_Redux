const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;

const Home = require("./client/components/Home.jsx").default;
console.log("Home:", Home);

const app = express();

const Port = 3000;

app.get("/", (req, res) => {
  // const content = renderToString("Test Message");
  console.log("req.ip:", req.ip);
  const content = renderToString(<Home />);
  // console.log("content:", content);
  res.send(content);
});

app.listen(Port, () => {
  console.log(`Server is listening on port: ${Port}`);
});
