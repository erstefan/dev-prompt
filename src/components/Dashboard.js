import React, { Component } from "react";
import {connect} from "react-redux";
import {ProjectsWrapper} from "../styles/dashboard";
import DashboardIntro from "./DashboardIntro";
import ProjectItem from "./ProjectItem";
import AppHeader from "./AppHeader";

class Dashboard extends Component {
  handleAddProject = () => {
    console.log('Add project');
  };

	render() {
	  const { user, projects, history } = this.props;
	  const noProjects = projects && projects.length < 2;
		return (
      <div>
        <AppHeader avatar={user.photoURL} />
        <ProjectsWrapper style={{ justifyContent: `${noProjects ? 'space-evenly' : 'flex-start'}`}}>
          {noProjects && <DashboardIntro user={user} handleAddProject={this.handleAddProject}/>}
          { projects && projects.map(project => <ProjectItem project={project} key={project.id} history={history}/>)}
        </ProjectsWrapper>
      </div>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user.user,
  projects: state.projects.projects
});

export default connect(mapStateToProps, null)(Dashboard);