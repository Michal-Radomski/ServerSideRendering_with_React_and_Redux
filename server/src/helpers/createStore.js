import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export default () => {
  const store = createStore(reducers, (initialState = {}), applyMiddleware(thunk));
  return store;
};
