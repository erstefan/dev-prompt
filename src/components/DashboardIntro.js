import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { brand } from '../styles/colors';
import PropTypes from 'prop-types';
import { SmallHeading } from '../styles/base';

const DashboardIntro = ({ user, handleAddProject, noProjects }) => {
  const firstname = user.name.split(' ')[0];
  if (noProjects) {
    return (
      <div className="intro">
        <h1>Hi, {firstname}!</h1>
        <h3>It's really easy to get started.</h3>
        <p style={{ maxWidth: '74%', marginLeft: 'auto', marginRight: 'auto' }}>
          Click the big blue button below. Select your project and you're on
          your way to master TermDocker.
        </p>
        <br />
        <Button
          size={'huge'}
          onClick={handleAddProject}
          style={{ background: brand.primary, color: '#fff' }}
        >
          Add project
        </Button>
      </div>
    );
  } else {
    return (
      <div className="dashboard-header">
        <SmallHeading>Dashboard</SmallHeading>
        <h3>Hi, {firstname}.</h3>
        <p>Manage your local projects & repositories from here.</p>
        <Button
          size={'tiny'}
          onClick={handleAddProject}
          style={{ background: brand.primary, color: '#fff' }}
        >
          <Icon className={'add'} /> ADD
        </Button>
      </div>
    );
  }
};

DashboardIntro.propTypes = {
  user: PropTypes.object.isRequired,
  handleAddProject: PropTypes.func.isRequired,
  noProjects: PropTypes.bool.isRequired,
};

export default DashboardIntro;
