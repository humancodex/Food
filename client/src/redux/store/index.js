import { applyMiddleware, createStore , compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhacers = (typeof window  !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__)||compose;
const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)));
//thunk para hacer acciones con promesas
export default store;



