// Startup point for the client side app
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./Routes";

// ReactDOM.render(<Home />, document.getElementById("root"));
ReactDOM.hydrate(
  <Router>
    <Routes />
  </Router>,
  document.querySelector("#root")
);
