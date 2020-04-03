import { applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewares = [thunk];

const DEV = process.env.NODE_ENV !== "production";

const rootMiddleware = () =>
  DEV
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export default rootMiddleware;
