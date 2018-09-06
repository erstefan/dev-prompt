import React from "react";

const Project = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.match.params.id}</h3>
    </div>
  )
};

export default Project;