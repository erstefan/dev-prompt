import React from "react";
import Link from "react-router-dom/es/Link";
import * as routes from "../constants/routes";
import {withRouter} from "react-router-dom";
import {Button, Checkbox, Container, Divider, Form, Header, Input} from "semantic-ui-react";

const LoginForm = (props) => {
  return (
    <div>
      <Container>
        <Header size="large">Sign in</Header>
        <Divider />
        <Form>
          <Form.Field>
            <label>Email address</label>
            <input type="email" placeholder='Email address' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder='Last Name' />
          </Form.Field>
          <Button primary type='submit'>Let me in</Button>
        </Form>

        <Link className={'ui button'} style={{ marginTop: '45px' }} to={routes.REGISTER}>Don't have an account? Register here.</Link>
      </Container>
    </div>
  )
};

export default withRouter(LoginForm);