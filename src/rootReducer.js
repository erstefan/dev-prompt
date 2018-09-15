import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import projects from './reducers/projects';
import userReducer from './reducers/user';
import terminals from './reducers/terminals';

export default combineReducers({
  user: userReducer,
  projects,
  terminals,
  router: routerReducer,
});
