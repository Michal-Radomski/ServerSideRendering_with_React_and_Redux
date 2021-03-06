import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import reducers from "../client/reducers/index";

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: "https://react-ssr-api.herokuapp.com",
    timeout: 1000,
    headers: {
      cookie: req.get("cookie") || "",
    },
  });

  const initialState = {};

  const store = createStore(reducers, initialState, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
};
