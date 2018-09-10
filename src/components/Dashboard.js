import React from "react";
import {Button, Container, Header, Icon, Image} from "semantic-ui-react";
import {fb, auth} from "../firebase/firebase";
import {connect} from "react-redux";
import {DashboardHeader, ProjectsWrapper} from "../styles/dashboard";
import {brand} from "../styles/colors";
import DashboardIntro from "./DashboardIntro";
import ProjectItem from "./ProjectItem";


class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

  signOut = () => {
    fb.auth().signOut();
  };

  handleAddProject = () => {

  };

	render() {
	  const { user, projects } = this.props;
	  const noProjects = projects && projects.length < 1;
		return (
      <div>
        <br/>
        <DashboardHeader>
          <div className="header__title">
            <h3>TermDocker</h3>
          </div>

          <div className="user__card">
            {/*<span className="user-name">{user.name.split(' ')[0]}</span>*/}
            <div className="user-photo">
              <Image floated='right' size='mini' style={{ borderRadius: '50px'}} src={user.photoURL} />
            </div>
          </div>
        </DashboardHeader>
        <ProjectsWrapper>

          {noProjects && <DashboardIntro user={user} handleAddProject={this.handleAddProject}/>}

          { projects && projects.map(project => <ProjectItem project={project} key={project.id} />)}
        </ProjectsWrapper>
        {/*<Button onClick={this.signOut}><Icon name='sign out' />Sign out</Button>*/}
      </div>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user.user,
  projects: state.projects.projects
});

export default connect(mapStateToProps, null)(Dashboard);