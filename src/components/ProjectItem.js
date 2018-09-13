import React from "react";
import PropTypes from "prop-types";
import {ProjectItemStyled} from "../styles/dashboard";
import {Button} from "semantic-ui-react";

const ProjectItem = ({ project, history, handleDelete, pending }) => {
  let viewDetailedProject = () => {
    history.push(`/project/${project.key}`);
  };

  return (
    <ProjectItemStyled className="project-item">
      <div onClick={viewDetailedProject}>
        <h3 className="project__name">{project.projectName}</h3>
      </div>
      <div>
        <Button className="btn-delete" size={"mini"} onClick={handleDelete} loading={pending} icon={"x"} />
        {/*<Button className="btn-delete" size={"mini"} onClick={deleteProject} loading={true} icon={"x"} />*/}
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