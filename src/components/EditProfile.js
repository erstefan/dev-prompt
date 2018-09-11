import React from 'react';
import AppHeader from "./AppHeader";
import {connect} from "react-redux";


class EditProfile extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
        <AppHeader avatar={this.props.user.photoURL} />
        Edit profile
      </div>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, null)(EditProfile);