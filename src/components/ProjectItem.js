import React from "react";
import PropTypes from "prop-types";
import {ProjectItemStyled} from "../styles/dashboard";
import {Button} from "semantic-ui-react";
const { dialog } = window.require('electron').remote

const ProjectItem = ({ project, history, handleDelete }) => {

  const [pending, setPending] = React.useState()

  const deleteProject = projectID => {

    const dialogOptions = {
      type: 'info',
      buttons: ['OK', 'Nope'],
      message: 'Are you sure?',
    }

    setPending(true)

    dialog.showMessageBox(dialogOptions, ok => {
      if(ok === 0) {
        handleDelete(projectID)
          .then(() => {
            setPending(false)
          })
          .catch(() => {
            setPending(false)
          })
      }

    })
  }
  let viewDetailedProject = () => {
    history.push(`/project/${project.key}`);
  };

  return (
    <ProjectItemStyled className="project-item">
      <div onClick={viewDetailedProject}>
        <h3 className="project__name">{project.projectName}</h3>
      </div>
      <div>
        <Button className="btn-delete" size={"mini"} onClick={deleteProject} loading={pending} icon={"x"} />
      </div>
    </ProjectItemStyled>
  )
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
};

export default ProjectItem;