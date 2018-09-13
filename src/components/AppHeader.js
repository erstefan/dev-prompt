import React from "react";
import {DashboardHeader} from "../styles/dashboard";
import {Button, Dropdown, Image} from "semantic-ui-react";
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {logout} from "../actions/loginActions";
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";
import {createProject} from "../actions/projectActions";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreateProject = () => {
    const {remote} = window.require('electron');
    if (this.props.loggedIn) {
      const pathArray = remote.dialog.showOpenDialog({properties: ['openDirectory']});
      if (pathArray) {
        let split = pathArray[0].split('/'),
          folderName = split[split.length - 1];

        let data = {
          path: pathArray[0],
          projectName: folderName
        };

        this.props.createProject(data);
      }
    }
  };

  render() {
    const {loggedIn, avatar} = this.props;
    let trigger = avatar &&
      <span><Image floated='right' size='mini' style={{borderRadius: '50px'}} src={avatar}/></span>;
    let placeholderAvatar = <span><Image floated='right' size='mini' style={{borderRadius: '50px'}}
                                         src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxMzQ1NjM7fQo8L3N0eWxlPjxnPjxnIGlkPSJJY29uLVVzZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3OC4wMDAwMDAsIDI3OC4wMDAwMDApIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI0Ni0yMjIuMWMtMTMuMiwwLTIzLjktMTAuNy0yMy45LTIzLjlzMTAuNy0yMy45LDIzLjktMjMuOWMxMy4yLDAsMjMuOSwxMC43LDIzLjksMjMuOSAgICAgUy0yMzIuOC0yMjIuMS0yNDYtMjIyLjFMLTI0Ni0yMjIuMXogTS0yNDYtMjY3LjNjLTExLjcsMC0yMS4zLDkuNi0yMS4zLDIxLjNjMCwxMS43LDkuNiwyMS4zLDIxLjMsMjEuMyAgICAgYzExLjcsMCwyMS4zLTkuNiwyMS4zLTIxLjNDLTIyNC43LTI1Ny43LTIzNC4zLTI2Ny4zLTI0Ni0yNjcuM0wtMjQ2LTI2Ny4zeiIgaWQ9IkZpbGwtNTciLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI2MC0yMjguN2wtMi40LTEuMWMwLjctMS43LDIuOS0yLjYsNS40LTMuN2MyLjQtMS4xLDUuNC0yLjQsNS40LTR2LTIuMiAgICAgYy0wLjktMC43LTIuMy0yLjMtMi41LTQuNmMtMC43LTAuNy0xLjgtMi0xLjgtMy42YzAtMSwwLjQtMS44LDAuNy0yLjNjLTAuMi0xLjEtMC42LTMuMy0wLjYtNWMwLTUuNSwzLjgtOS4xLDkuOC05LjEgICAgIGMxLjcsMCwzLjgsMC41LDQuOSwxLjdjMi43LDAuNSw0LjksMy43LDQuOSw3LjRjMCwyLjQtMC40LDQuNC0wLjcsNS4zYzAuMywwLjUsMC42LDEuMiwwLjYsMmMwLDEuOS0wLjksMy4xLTEuOCwzLjcgICAgIGMtMC4yLDIuMy0xLjUsMy44LTIuMyw0LjV2Mi4yYzAsMS40LDIuNSwyLjMsNC44LDMuMmMyLjcsMSw1LjUsMiw2LjQsNC4zbC0yLjUsMC45Yy0wLjQtMS4yLTIuOC0yLTQuOC0yLjggICAgIGMtMy4xLTEuMS02LjYtMi40LTYuNi01LjZ2LTMuNmwwLjYtMC40YzAuMSwwLDEuOC0xLjIsMS44LTMuNXYtMC45bDAuOC0wLjNjMC4xLTAuMSwwLjktMC41LDAuOS0xLjdjMC0wLjQtMC4zLTAuOC0wLjQtMC45ICAgICBsLTAuNS0wLjZsMC4yLTAuN2MwLDAsMC43LTIuMiwwLjctNS4yYzAtMi41LTEuNC00LjgtMi45LTQuOGgtMC44bC0wLjQtMC43Yy0wLjMtMC41LTEuNS0xLTMuMS0xYy00LjUsMC03LjIsMi40LTcuMiw2LjUgICAgIGMwLDEuOSwwLjcsNSwwLjcsNWwwLjIsMC43bC0wLjUsMC41YzAsMC0wLjQsMC41LTAuNCwxYzAsMC43LDAuOSwxLjYsMS4zLDJsMC41LDAuNGwwLDAuN2MwLDIuMiwxLjksMy40LDEuOSwzLjRsMC42LDAuNGwwLDMuNiAgICAgYzAsMy4zLTMuNyw1LTcsNi40Qy0yNTcuNS0yMzAuNC0yNTkuNi0yMjkuNC0yNjAtMjI4LjciIGlkPSJGaWxsLTU4Ii8+PC9nPjwvZz48L3N2Zz4="/></span>;
    return (
      <DashboardHeader>
        <div className="header__title">
          <Link to={loggedIn ? routes.DASHBOARD : routes.HOME}>
            <h3>TermDocker</h3>
          </Link>
        </div>

        <div className="user__card">
          <Button size={"mini"} basic icon={"plus"} onClick={this.handleCreateProject}/>
          {loggedIn ? <Dropdown trigger={trigger} pointing='top right' icon={null}>
            <Dropdown.Menu>
              <Dropdown.Item icon='folder' text='Add project'/>
              <Dropdown.Item icon='sign out' text='Sign out' onClick={() => this.props.logout()}/>
              <Dropdown.Item icon='edit' text='Edit profile' as={Link} to={routes.EDIT_PROFILE}/>
            </Dropdown.Menu>
          </Dropdown> : placeholderAvatar}
        </div>
      </DashboardHeader>
    )
  }
}

AppHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  createProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  avatar: state.user.user.photoURL
});

export default connect(mapStateToProps, {logout, createProject})(AppHeader);

