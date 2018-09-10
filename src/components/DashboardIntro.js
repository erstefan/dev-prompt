import React from "react";
import {Button} from "semantic-ui-react";
import {brand} from "../styles/colors";
import PropTypes from "prop-types"; 

const DashboardIntro = ({ user, handleAddProject }) => {

  const firstname = user.name.split(' ')[0];

  return (
    (user && user.name) && (<div className="intro">
      <h1>Hi, {firstname}!</h1>
      <h3>It's really easy to get started.</h3>
      <p style={{ maxWidth: '74%', marginLeft: 'auto', marginRight: 'auto'}}>Click the big blue button below. Select your project and you're on your way to master TermDocker.</p>
      <br/>
      <Button size={"huge"} onClick={handleAddProject} style={{ background: brand.primary, color: '#fff'}}>Add project</Button>
    </div>)
  )
};

DashboardIntro.propTypes = {
  user: PropTypes.object.isRequired,
  handleAddProject: PropTypes.func.isRequired
};

export default DashboardIntro;