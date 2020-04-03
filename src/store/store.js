import { createStore } from "redux";

// Reducers
import rootReducer from "./reducers";

// Middlewares
import middlewares from "./middlewares";

// Crear el store
const store = createStore(rootReducer(), middlewares());

export default store;
