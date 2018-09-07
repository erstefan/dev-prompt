import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {store, history} from "./store";
import {Provider} from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import dotenv from "dotenv";

dotenv.config();

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));