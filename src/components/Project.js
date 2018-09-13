import React from 'react';
import { connect } from 'react-redux';
import { deleteProject, getSingleProject } from '../actions/projectActions';
import { Button, Icon } from 'semantic-ui-react';
import {
  Container,
  ProjectHeaderToolbar,
  ProjectTitle,
} from '../styles/project';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }

  handleDeleteProject = () => {
    let id = this.props.match.params.id;
    this.props.deleteProject(id);
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getSingleProject(id);
  }
  render() {
    const { project } = this.props;
    return (
      <React.Fragment>
        {project ? (
          <React.Fragment>
            <ProjectHeaderToolbar>
              <button onClick={() => this.props.history.replace('/dashboard')}>
                <Icon className={'arrow left'} />
              </button>
              <span>{project.projectName}</span>
              <button onClick={this.handleDeleteProject}>
                <Icon className={'trash alternate outline'} />
              </button>
            </ProjectHeaderToolbar>
            <Container>
            </Container>
          </React.Fragment>
        ) : (
          <div>nada</div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  project: state.projects.data[0],
  user: state.user.user,
});

export default connect(
  mapStateToProps,
  { deleteProject, getSingleProject },
)(Project);
