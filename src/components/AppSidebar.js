import React from 'react';
import {AppSidebarWrapper} from "../styles/base";
import uuid from "uuid";
import ProjectTree from "./ProjectTree";

class AppSidebar extends React.Component {

  state = {
    projects: [
      {
        id: "fbe0d188-d70b-4447-93b9-8ac6e8916ffb",
        name: "VirusAway",
        path: "/Users/stefan/Documents/VirusAway"
      }
    ]
  };

	handleClick = e => {
	  e.preventDefault();
	  const { dialog } = window.require('electron').remote;
    let path = dialog.showOpenDialog({properties: ['openDirectory']});
    let split_path = path[0].split('/');
    let project_name = split_path[split_path.length - 1];
    console.log(split_path, project_name);

    let project = {
      id: uuid(),
      name: project_name,
      path: path[0]
    };

    console.log(project);
    this.setState(prevState => ({projects: [...prevState.projects, project] }));
  };

	render() {
		return (
			<AppSidebarWrapper>
        <div style={styles.container}>
          <div className="projects-container">
            {this.state.projects.length > 0 ? <ProjectTree projects={this.state.projects} /> : <div>No projects.</div>}
          </div>
          <button style={styles.createProject} onClick={this.handleClick}>Add project</button>
        </div>
      </AppSidebarWrapper>
		);
	}
}

const styles = {
  container: {
    padding: '15px 0',
    display: 'flex',
    flexDirection: 'column',

    height: '100vh',
    justifyContent: 'space-between'
  },
  createProject: {
    background: '#8BC34A',
    textTransform: 'uppercase',
    color: '#fff',
    padding: '15px 55px',
    fontWeight: 500,
    letterSpacing: '1px',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '0',
    borderRadius: '5px'
  }
};

export default AppSidebar;