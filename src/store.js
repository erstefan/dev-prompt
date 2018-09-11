import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './rootReducer';
import reduxThunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';
import {connectRouter, routerMiddleware} from "connected-react-router";

export const history = createHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      reduxThunk,
      createLogger()
    )
  )
);