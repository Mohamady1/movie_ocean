import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initial = [];

const reducer = (state = initial, action) => {
  if (action.type === "FETCH_DATA") {
    return { ...state, data: action.payload };
  }

  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
