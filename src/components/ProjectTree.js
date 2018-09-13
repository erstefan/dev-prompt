import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProjectTree extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div style={styles.container}>
        <h3 style={styles.heading}>ALL PROJECTS</h3>

        {projects &&
          projects.map(project => {
            return (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                style={styles.project}
              >
                <span style={styles.projectName}>{project.name}</span>
                <span style={styles.projectPath}>
                  {project.path.substr(0, 20)}
                  ...
                </span>
              </Link>
            );
          })}
      </div>
    );
  }
}

const styles = {
  heading: {
    fontSize: '12px',
    fontWeight: '600',
    marginLeft: '20px',
    letterSpacing: '1px',
    color: '#aaa',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
  },
  project: {
    paddingTop: '15px',
    paddingBottom: '15px',
    backgroundColor: '#fff',
    borderTop: '1px solid #DDEAED',
    borderBottom: '1px solid #DDEAED',
    paddingLeft: '20px',
    paddingRight: '10px',
  },
  projectName: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '5px',
  },
  projectPath: {
    display: 'block',
    fontSize: '12px',
    fontWeight: '300',
    color: '#aaa',
  },
};

export default connect()(ProjectTree);
