import React, {Component} from 'react';
import './App.css';
import {AppContent, AppContainer} from "./styles/base";
import AppSidebar from "./components/AppSidebar";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";

// const {app} = window.require('electron').remote;
window.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppContainer>
          <AppSidebar/>
          <AppContent>
            <Route exact path="/" component={Home}/>
            <Route exact path="/project/:id" component={Project}/>
          </AppContent>
        </AppContainer>
      </div>
    );
  }
}

export default App;
