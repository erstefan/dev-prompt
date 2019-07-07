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

class Dashboard extends Component {
  state = {
    pending: false
  }

  handleAddProject = () => {
    const { remote } = window.require('electron')
    const pathArray = remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    })
    if(pathArray) {
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
          {user.pending ? (
            <DashboardLoader/>
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
                  pending={this.state.pending}
                  key={project.key}
                  handleDelete={this.props.deleteProject}
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
