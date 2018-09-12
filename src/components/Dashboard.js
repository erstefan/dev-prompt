import React, {Component} from "react";
import {connect} from "react-redux";
import {ProjectsWrapper} from "../styles/dashboard";
import DashboardIntro from "./DashboardIntro";
import ProjectItem from "./ProjectItem";
import AppHeader from "./AppHeader";
import {createProject, getAllProjects} from "../actions/projectActions";
import DashboardLoader from "../DashboardLoader";


class Dashboard extends Component {
  handleAddProject = () => {
    const {remote} = window.require('electron');
    const pathArray = remote.dialog.showOpenDialog({properties: ['openDirectory']});
    if (pathArray) {
      let split     = pathArray[0].split('/'),
        folderName  = split[split.length - 1];

      let data = {
        path: pathArray[0],
        projectName: folderName
      };

      this.props.createProject(data);
    }
  };

  componentDidMount() {
  	this.props.getAllProjects();
  }

  render() {
    const {user, projects, history} = this.props;
    const noProjects = projects.data && projects.data.length < 1;
    console.log('no projects', noProjects);
    const mappedProjects = projects.data.map(project => <ProjectItem project={project} key={project.key} history={history}/>);
    // const mappedProjects = projects.data.length > 0 ? projects.data.map(project => <div>{project.uid}</div>) : <div>yolo</div>;
    console.log('total', projects.data.length);
    return (
      <div>
        <AppHeader addProject={this.handleAddProject} avatar={user.photoURL}/>
        <ProjectsWrapper style={{justifyContent: `${noProjects ? 'space-evenly' : 'flex-start'}`}}>
          {projects.pending ? <DashboardLoader/> : (
            <React.Fragment>
              <DashboardIntro user={user} handleAddProject={this.handleAddProject} noProjects={noProjects}/>
              { projects.data.length > 0 && mappedProjects}
            </React.Fragment>
          )}
        </ProjectsWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  projects: state.projects
});

export default connect(mapStateToProps, {createProject, getAllProjects})(Dashboard);