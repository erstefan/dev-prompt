import React from "react";
import {DashboardHeader} from "../styles/dashboard";
import {Button, Dropdown, Icon, Image} from "semantic-ui-react";
import PropTypes from "prop-types";

const AppHeader = ({ avatar }) => {
  let trigger = <span><Image floated='right' size='mini' style={{ borderRadius: '50px'}} src={avatar} /></span>

  return (
    <DashboardHeader>
      <div className="header__title">
        <h3>TermDocker</h3>
      </div>

      <div className="user__card">
        <Button size={"mini"} icon={"plus"} />
        <Dropdown trigger={trigger} pointing='top right' icon={null}>
          <Dropdown.Menu>
            <Dropdown.Item icon='folder' text='Add project' />
            <Dropdown.Item icon='sign out' text='Sign out' />
          </Dropdown.Menu>
        </Dropdown>
      </div>
        {/*<div className="user-photo">*/}
          {/*<Image floated='right' size='mini' style={{ borderRadius: '50px'}} src={avatar} />*/}
        {/*</div>*/}

    </DashboardHeader>
  )
};

AppHeader.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default AppHeader;

