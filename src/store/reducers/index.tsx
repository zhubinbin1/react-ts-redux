import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router"
import history from "../history"
import home from "./home"
import Profile from "./Profile"
import Mine from "./Mine"
let reudcers = {
    home,
    profile:Profile,
    mine:Mine,
    router:connectRouter(history)
}
//根状态
export type TypeRootState={
   [key in keyof (typeof reudcers)] :ReturnType<typeof reudcers[key]>
}
export default combineReducers(reudcers);