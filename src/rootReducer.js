import {combineReducers} from "redux";
import { routerReducer } from "react-router-redux";
import projects from "./reducers/projects";

export default combineReducers({
  projects,
  router: routerReducer
});