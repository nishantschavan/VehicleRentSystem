import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), composeWithDevTools())
);

export default store;
