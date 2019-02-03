import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProjectsWrapper } from '../styles/dashboard'
import DashboardIntro from './DashboardIntro'
import ProjectItem from './ProjectItem'
import {
  createProject,
  deleteProject,
  getAllProjects,
} from '../actions/projectActions'
import DashboardLoader from '../DashboardLoader'
const { dialog } = window.require('electron').remote

class Dashboard extends Component {
  handleAddProject = () => {
    const { remote } = window.require('electron')
    const pathArray = remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    })
    if (pathArray) {
      let split = pathArray[0].split('/'),
        folderName = split[split.length - 1]

      let data = {
        path: pathArray[0],
        projectName: folderName,
      }

      this.props.createProject(data)
    }
  }

  componentDidMount() {
    // this.props.getAllProjects();
  }

  handleDeleteProject = projectID => {
    const dialogOptions = {
      type: 'info',
      buttons: ['OK', 'Nope'],
      message: 'Are you sure?',
    }

    dialog.showMessageBox(dialogOptions, ok => {
      if (ok == 0) this.props.deleteProject(projectID)
      return;
    })
  }

  render() {
    const { user, projects, history } = this.props
    const noProjects = projects.data && projects.data.length < 1

    return (
      <React.Fragment>
        <ProjectsWrapper
          style={{
            justifyContent: `${noProjects ? 'space-evenly' : 'flex-start'}`,
          }}
        >
          {projects.pending ? (
            <DashboardLoader />
          ) : (
            <React.Fragment>
              <DashboardIntro
                user={user}
                handleAddProject={this.handleAddProject}
                noProjects={noProjects}
              />
              {projects.data.length > 0 &&
                projects.data.map(project => (
                  <ProjectItem
                    project={project}
                    pending={projects.pending}
                    key={project.key}
                    handleDelete={() => this.handleDeleteProject(project.key)}
                    history={history}
                  />
                ))}
            </React.Fragment>
          )}
        </ProjectsWrapper>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  projects: state.projects,
})

export default connect(
  mapStateToProps,
  { createProject, deleteProject, getAllProjects },
)(Dashboard)
