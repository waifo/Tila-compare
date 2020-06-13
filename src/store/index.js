import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import getReducers from "../reducers";

const middlerwares = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
  getReducers,
  composeEnhancers(applyMiddleware(...middlerwares))
);

export default store;
