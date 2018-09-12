import React from "react";
import {DashboardHeader} from "../styles/dashboard";
import {Button, Dropdown, Image} from "semantic-ui-react";
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {logout} from "../actions/loginActions";
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";
import {brand} from "../styles/colors";

class AppHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let trigger = <span><Image floated='right' size='mini' style={{ borderRadius: '50px'}} src={this.props.avatar} /></span>;

    return (
      <DashboardHeader>
        <div className="header__title">
          <Link to={routes.DASHBOARD}>
            <h3>TermDocker</h3>
          </Link>
        </div>

        <div className="user__card">
          <Button size={"mini"} basic icon={"plus"} onClick={this.props.addProject} />
          <Dropdown trigger={trigger} pointing='top right' icon={null}>
            <Dropdown.Menu>
              <Dropdown.Item icon='folder' text='Add project' />
              <Dropdown.Item icon='sign out' text='Sign out' onClick={() => this.props.logout()} />
              <Dropdown.Item icon='edit' text='Edit profile' as={Link} to={routes.EDIT_PROFILE} />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </DashboardHeader>
    )
  }
}

AppHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  addProject: PropTypes.func.isRequired
};

export default connect(null, {logout})(AppHeader);

