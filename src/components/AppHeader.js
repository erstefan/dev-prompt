import React from "react";
import {DashboardHeader} from "../styles/dashboard";
import {Image} from "semantic-ui-react";
import PropTypes from "prop-types"; 

const AppHeader = ({ avatar }) => <DashboardHeader>
  <div className="header__title">
    <h3>TermDocker</h3>
  </div>

  <div className="user__card">
    <div className="user-photo">
      <Image floated='right' size='mini' style={{ borderRadius: '50px'}} src={avatar} />
    </div>
  </div>
</DashboardHeader>;

AppHeader.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default AppHeader;

