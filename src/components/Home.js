import React from "react";
import LoginForm from "./LoginForm";
import {withRouter} from "react-router-dom";
import {Button, Divider, Segment} from "semantic-ui-react";

const Home = () => (
  <div>
    <br/><br/><br/>
    <LoginForm />
  </div>
);

export default withRouter(Home);