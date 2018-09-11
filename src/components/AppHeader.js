import React from "react";
import {DashboardHeader} from "../styles/dashboard";
import {Button, Dropdown, Image} from "semantic-ui-react";
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {logout} from "../actions/loginActions";

class AppHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let trigger = <span><Image floated='right' size='mini' style={{ borderRadius: '50px'}} src={this.props.avatar} /></span>;

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
              <Dropdown.Item icon='sign out' text='Sign out' onClick={() => this.props.logout()} />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </DashboardHeader>
    )
  }
}

AppHeader.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default connect(null, {logout})(AppHeader);

