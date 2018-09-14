import React from 'react';
import { connect } from 'react-redux';
import { deleteProject, getSingleProject } from '../actions/projectActions';
import { Button, Form, Icon } from 'semantic-ui-react';
import { Container, ProjectHeaderToolbar } from '../styles/project';
import Terminal from './Terminal';
import {brand} from "../styles/colors";

class Project extends React.Component {
  state = {
    project: [],
    command: '',
    terminals: [{ name: 'Terminal', command: '', color: brand.primary }],
  };

  handleDeleteProject = () => {
    let id = this.props.match.params.id;
    this.props.deleteProject(id);
  };

  handleTerminalNameChange = (idx, target) => ({ name }) => {
    console.log('handleTerminalNameChange', target);
    const newTerminals = this.state.terminals.map((terminal, i) => {
      if (idx !== i) return terminal;
      return { ...terminal, name };
    });
    this.setState({ terminals: newTerminals });
  };

  handleTerminalCommandChange = idx => e => {
    // console.log(idx, e.target);
    const newCommands = this.state.terminals.map((terminal, cidx) => {
      // console.log('handleTerminalCommandChange', command);
      if (idx !== cidx) {
        return terminal;
      }
      return { ...terminal, command: e.target.value };
    });
    // console.log('handleTerminalCommandChange newCommands', newCommands);
    console.log('new term', newCommands);
    this.setState({ terminals: newCommands });
  };

  handleTerminalColorChange = (index, {hex}) => {
    const newColors = this.state.terminals.map((terminal, cid) => {
      if (index !== cid) {
        return terminal;
      }
      return { ...terminal, color: hex };
    });
    this.setState({ terminals: newColors });
  };
  handleRemoveTerminal = index => () => {
    console.log('remove terminal at index', index);
    this.setState({
      terminals: this.state.terminals.filter((terminal, i) => index !== i),
    });
  };

  handleAddTerminal = () => {
    this.setState({
      terminals: this.state.terminals.concat([
        { name: 'Terminal', command: '', color: brand.primary },
      ]),
    });
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getSingleProject(id);
  }

  render() {
    const { project } = this.props;
    const { terminals } = this.state;
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
              <Form>
                {terminals &&
                  terminals.map((terminal, i) => (
                    <Terminal
                      key={i}
                      index={i}
                      terminal={terminal}
                      handleRemoveTerminal={this.handleRemoveTerminal}
                      handleTerminalCommandChange={this.handleTerminalCommandChange}
                      handleTerminalNameChange={this.handleTerminalNameChange}
                      handleTerminalColorChange={this.handleTerminalColorChange}
                    />
                  ))}
                <Button basic size="tiny" onClick={this.handleAddTerminal}>
                  <Icon className={'plus'} /> Add
                </Button>
              </Form>
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
