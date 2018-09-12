import React from "react";
import PropTypes from "prop-types";
import {ProjectItemStyled} from "../styles/dashboard";

const ProjectItem = ({ project, history }) => {
  let viewDetailedProject = () => {
    history.push(`/project/${project.id}`);
  };
  return (
    <ProjectItemStyled onClick={viewDetailedProject}>
      <h3 className="project__name">{project.projectName}</h3>
      <span className="project__path">{project.path}</span>
    </ProjectItemStyled>
  )
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ProjectItem;