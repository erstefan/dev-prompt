import React, {Component} from 'react';
import './App.css';
import {AppContent, AppContainer} from "./styles/base";
import AppSidebar from "./components/AppSidebar";
import {Route, withRouter} from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Register from "./components/Register";
import * as routes from "./constants/routes";

// const {app} = window.require('electron').remote;
window.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppContainer>
          <Route exact path="/" component={Home}/>
          <Route path="/project/:id" component={Project}/>
          <Route path={routes.REGISTER} component={Register}/>
          {/*<AppSidebar/>*/}
          {/*<AppContent>*/}

          {/*</AppContent>*/}
        </AppContainer>
      </div>
    );
  }
}

export default withRouter(App);
