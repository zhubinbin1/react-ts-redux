import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers"
import promise from "redux-promise"
import logger from "redux-logger"
import thunk from "redux-thunk"
import history from "../store/history"
import {routerMiddleware} from "connected-react-router"

let store = createStore(reducers,applyMiddleware(routerMiddleware(history),promise,thunk,logger));
export default store;