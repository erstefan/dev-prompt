import React from 'react';
import { connect } from 'react-redux';
import {
  createTerminalCommand,
  deleteProject,
  getSingleProject,
} from '../actions/projectActions';
import { Button, Form, Icon, Popup } from 'semantic-ui-react';
import { Container, ProjectHeaderToolbar } from '../styles/project';
import Terminal from './Terminal';
import { brand } from '../styles/colors';

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
    const newTerminals = this.state.terminals.map((terminal, i) => {
      if (idx !== i) return terminal;
      return { ...terminal, name };
    });
    this.setState({ terminals: newTerminals });
  };

  handleTerminalCommandChange = idx => e => {
    const newCommands = this.state.terminals.map((terminal, cidx) => {
      if (idx !== cidx) {
        return terminal;
      }
      return { ...terminal, command: e.target.value };
    });
    this.setState({ terminals: newCommands });
  };

  handleTerminalColorChange = (index, { hex }) => {
    const newColors = this.state.terminals.map((terminal, cid) => {
      if (index !== cid) {
        return terminal;
      }
      return { ...terminal, color: hex };
    });
    this.setState({ terminals: newColors });
  };
  
  handleRemoveTerminal = index => () => {
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

  handleSubmit = e => {
    e.preventDefault();
    const { terminals } = this.state;
    let data = {
      projectId: this.props.match.params.id,
      ...terminals,
    };
    this.props.createTerminalCommand(data);
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getSingleProject(id);
  }

  render() {
    const { project, commands } = this.props;
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
              <Form onSubmit={this.handleSubmit}>
                <div style={{ marginBottom: '50px' }}>
                  {/*{project.commands &&*/}
                    {/*project.commands.map((terminal, i) => (*/}
                      {/*<Terminal*/}
                        {/*key={i}*/}
                        {/*index={i}*/}
                        {/*terminal={terminal}*/}
                        {/*handleRemoveTerminal={this.handleRemoveTerminal}*/}
                        {/*handleTerminalCommandChange={*/}
                          {/*this.handleTerminalCommandChange*/}
                        {/*}*/}
                        {/*handleTerminalNameChange={this.handleTerminalNameChange}*/}
                        {/*handleTerminalColorChange={*/}
                          {/*this.handleTerminalColorChange*/}
                        {/*}*/}
                      {/*/>*/}
                    {/*))}*/}
                  {terminals.map((terminal, i) => (
                    <Terminal
                      key={i}
                      index={i}
                      terminal={terminal}
                      handleRemoveTerminal={this.handleRemoveTerminal}
                      handleTerminalCommandChange={
                        this.handleTerminalCommandChange
                      }
                      handleTerminalNameChange={this.handleTerminalNameChange}
                      handleTerminalColorChange={this.handleTerminalColorChange}
                    />
                  ))}
                </div>

                <div style={{ marginTop: '15px', display: 'block' }}>
                  <Popup
                    style={{ zIndex: 9999 }}
                    trigger={
                      <Button
                        basic
                        type="button"
                        className="btn-term-action"
                        size="tiny"
                        onClick={this.handleAddTerminal}
                      >
                        <Icon className={'plus'} />
                      </Button>
                    }
                    content="Create new terminal"
                  />
                  <Popup
                    content="Save everything"
                    trigger={
                      <Button
                        type="submit"
                        className="btn-term-action"
                        basic
                        size="tiny"
                      >
                        <Icon className="save" />
                      </Button>
                    }
                  />

                  <Button
                    type="button"
                    style={{ backgroundColor: brand.primary, color: '#fff' }}
                    size="tiny"
                  >
                    <Icon className="play" /> RUN ALL
                  </Button>
                </div>
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
  { deleteProject, getSingleProject, createTerminalCommand },
)(Project);
