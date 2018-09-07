import React from "react";
import {connect} from "react-redux";


class Project extends React.Component {
	componentDidMount() {

	}
	render() {
	  const {projects} = this.props;
    let id = this.props.match.params.id;
	  if (projects) {
	    const project = projects.filter(project => project.id === id)[0];
      return (
        <div style={{ padding: '25px' }}>
          <h3>{project.name}</h3>
          <span>{project.path}</span>
        </div>
      );
    } else {
	    return (
	      <div>Not loaded yet.</div>
      )
    }

	}
}

const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps, null)(Project);