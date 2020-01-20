import React from "react";
import { Menu, Icon, Grid, Button } from "semantic-ui-react";

const LoginMenu = props => {
  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Button.Group textAlign="center">
          <Button
            // color="blue"
            size="large"
            id="signupButton"
            name="signup"
            active={props.activeItem === "signup"}
            onClick={props.handleMenuClick}
            // className={this.state.signup ? "violet" : "blue"}
          >
            {" "}
            Sign Up
          </Button>
          {/* <Button.Or /> */}
          <Button
            // color="violet"
            size="large"
            id="loginButton"
            name="login"
            active={props.activeItem === "login"}
            onClick={props.handleMenuClick}

            // className={this.state.login ? "violet" : "blue"}
          >
            Login
          </Button>
        </Button.Group>
      </Grid.Column>
    </Grid>
  );
};

export default LoginMenu;
