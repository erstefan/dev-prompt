import {combineReducers} from "redux";
import { routerReducer } from "react-router-redux";
import projects from "./reducers/projects";
import userReducer from "./reducers/user";

export default combineReducers({
  user: userReducer,
  projects,
  router: routerReducer
});