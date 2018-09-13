import React from 'react';
import { Container } from 'semantic-ui-react';
import { auth } from '../firebase/firebase';
import { githubProvider } from '../firebase/firebase';
import 'firebaseui/dist/firebaseui.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const LoginForm = ({ history, loginUser }) => {
  const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [githubProvider.providerId],
    callbacks: {
      signInSuccessWithAuthResult: res => {
        loginUser(history, res.user);
      },
    },
  };

  return (
    <div>
      <Container>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </Container>
    </div>
  );
};

export default LoginForm;
