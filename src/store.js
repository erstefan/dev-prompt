import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './rootReducer';
import reduxThunk from "redux-thunk";
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import {connectRouter} from "connected-react-router";

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(reduxThunk, myRouterMiddleware, createLogger())
  }
};

export const store = createStore(
  connectRouter(history)(reducer),
  composeWithDevTools(getMiddleware())
);