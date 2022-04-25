// Startup point for the client side app
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";

import Routes from "./Routes";
import reducers from "./reducers/index";

const store = createStore(reducers, (initialState = {}), applyMiddleware(thunk));

// ReactDOM.render(<Home />, document.getElementById("root"));
ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
