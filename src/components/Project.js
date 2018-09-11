import React from "react";
import {connect} from "react-redux";
import {deleteProject} from "../actions/projectActions";
import AppHeader from "./AppHeader";


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: []
    };
  }

	handleDeleteProject = () => {
    let id = this.props.match.params.id;
	  this.props.deleteProject(id);
  };

	getProject = id => {
    const {projects} = this.props;
    const project = projects.filter(project => project.id === id);
    this.setState({ project: project[0] });
  };

	componentDidMount() {
    let id = this.props.match.params.id;
		this.getProject(id)
	}
	render() {
	  const project = this.state.project;
	  console.log("props", this.props);
      return (
        <div>
          <AppHeader avatar={this.props.user.photoURL} />

          {project ? <div style={{ padding: '25px' }}>
            <button onClick={this.handleDeleteProject}>Delete</button>
            <button onClick={() => this.props.history.replace('/dashboard')}>Back to dashboard</button>
            <h3>{project.name}</h3>
            <span>{project.path}</span>
          </div> : <div>nada</div>}
        </div>
      );
	}
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
  user: state.user.user
});

export default connect(mapStateToProps, {deleteProject})(Project);