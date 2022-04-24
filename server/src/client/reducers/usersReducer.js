import {FETCH_USERS} from "../actions/index";

export default (initialState = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return initialState;
  }
};
