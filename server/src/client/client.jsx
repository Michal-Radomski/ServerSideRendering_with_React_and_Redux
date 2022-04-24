// Startup point for the client side app
import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/Home";

// ReactDOM.render(<Home />, document.getElementById("root"));
ReactDOM.hydrate(<Home />, document.getElementById("root"));
