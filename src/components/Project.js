import React from "react";
import {connect} from "react-redux";
import {deleteProject} from "../actions/projectActions";


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
    console.log('this.getProject();', projects);
    const project = projects.filter(project => project.id === id);
    console.log('project detail', project);
    this.setState({ project: project[0] });
  };

	componentDidMount() {
    let id = this.props.match.params.id;
		this.getProject(id)
	}
	render() {

	  const project = this.state.project;
    console.log('KKKKKKK', project);

      return (
        project ? <div style={{ padding: '25px' }}>
          <button onClick={this.handleDeleteProject}>Delete</button>
          <h3>{project.name}</h3>
          <span>{project.path}</span>
        </div> : <div>nada</div>
      );


    // return (projects ? <div style={{ padding: '25px' }}>
    //   <button onClick={this.handleDeleteProject(project.id)}>Delete</button>
    //   <h3>{project.name}</h3>
    //   <span>{project.path}</span>
    // </div> : <div>Not loaded yet.</div>)


	}
}

const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps, {deleteProject})(Project);