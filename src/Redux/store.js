import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistconfig = {
  key:'persistdata',
  storage
};

const persistedReducer = persistReducer(persistconfig,rootReducer);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware), composeWithDevTools())
  // compose(applyMiddleware(...middleware))
);

export const persistedstore = persistStore(store); 

export default store;