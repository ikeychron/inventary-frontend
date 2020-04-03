import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import layoutReducer from "./layoutReducer";

const rootReducer = () =>
  combineReducers({
    auth: authReducer,
    layout: layoutReducer,
  });

export default rootReducer;
