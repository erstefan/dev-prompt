import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditProfile extends Component {
  render() {
    return <div>Edit profile</div>;
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(
  mapStateToProps,
  null,
)(EditProfile);
