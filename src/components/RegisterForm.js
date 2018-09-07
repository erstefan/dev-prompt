import React from "react";
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";
import {Button, Divider, Form, Header} from "semantic-ui-react";

const RegisterForm = () => {
  return (
    <div className={'ui container'}>
      <br/>
      <Header size="large">Register account</Header>
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
        <Button primary type='submit'>Register</Button>
      </Form>
      <br/>
      <Link to={routes.HOME}>Already have an account? Sign in</Link>
    </div>
  );
};

export default RegisterForm;