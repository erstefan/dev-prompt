import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginActions';

const Home = ({ history, loginUser, auth }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <LoginForm history={history} loginUser={loginUser} user={auth} />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Home);
