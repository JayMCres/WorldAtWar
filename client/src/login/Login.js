import React, { Component } from "react";
import { Form, Grid, Header, Message, Segment } from "semantic-ui-react";

export default class Login extends Component {
  render() {
    return (
      <div>
        {/* <div className="loginform"> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <style>{` body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }`}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" style={{ color: "#87CEFA" }} textAlign="center">
              <Message style={{ color: "blue" }}>
                {" "}
                <strong>FIN-ALYZE</strong>
              </Message>
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.props.handleSubmit}>
              <Segment>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={this.props.username}
                  onChange={this.props.handleChange}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.props.handleChange}
                />
                <input type="submit" value="Submit" />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
      // </div>
    );
  }
}
