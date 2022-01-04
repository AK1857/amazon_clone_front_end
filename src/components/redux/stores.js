import { createStore, appyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "./reducers";
import redux_thunk from "redux-thunk";

const middleware = [redux_thunk];

const initialState = {};
const store = createStore(
  rootReducer,
  {},
  compose(
    // appyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
