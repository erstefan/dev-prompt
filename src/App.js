import React, {Component} from 'react';
import './App.css';
import {AppContent, AppContainer} from "./styles/base";
import AppSidebar from "./components/AppSidebar";

// const {app} = window.require('electron').remote;
window.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppContainer>
          <AppSidebar/>
          <AppContent>

          </AppContent>
        </AppContainer>
      </div>
    );
  }
}

export default App;
