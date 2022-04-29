import React from "react";
import {renderRoutes} from "react-router-config";

import Header from "./components/Header.jsx";
import {fetchCurrentUser} from "./actions/index";

const App = ({route}) => {
  console.log("route", route);
  return (
    <div>
      {/* <h1>I'm a Header</h1> */}
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // loadData: ({dispatch}) => {
  //   return dispatch(fetchCurrentUser());
  // },
  //* The same as above:
  loadData: ({dispatch}) => dispatch(fetchCurrentUser()),
};
