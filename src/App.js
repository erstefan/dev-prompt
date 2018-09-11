import React, {Component} from 'react';
import './App.css';
import {AppContainer} from "./styles/base";
import {Route, withRouter} from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Register from "./components/Register";
import * as routes from "./constants/routes";
import {DASHBOARD} from "./constants/routes";
import Dashboard from "./components/Dashboard";
import { fb } from "./firebase/firebase";
import {loginUser} from "./actions/loginActions";
import {connect} from "react-redux";
import EditProfile from "./components/EditProfile";
// const {app} = window.require('electron').remote;
window.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

window.require('electron-titlebar');

class App extends Component {
  componentDidMount() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.loginUser(this.props.history, user);
        this.props.history.push(DASHBOARD)
      } else {
        this.props.history.push('/')
      }
    })

  }
  render() {
    return (
      <div className="app">
        <div id="electron-titlebar">
          <div className="drag" style={{top: 0, left: 0, width: '100%', height: '100%', position: 'absolute'}}/>
        </div>
        <AppContainer>
          <Route exact path="/" component={Home}/>
          <Route exact path="/project/:id" component={Project}/>
          <Route exact path={routes.EDIT_PROFILE} component={EditProfile}/>
          <Route path={routes.REGISTER} component={Register}/>
          <Route path={routes.DASHBOARD} component={Dashboard}/>
        </AppContainer>
      </div>
    );
  }
}

export default withRouter(connect(null, {loginUser})(App));
