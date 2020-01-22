import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  Message,
  Grid,
  Header
} from "semantic-ui-react";

export default class Signup extends Component {
  state = {
    // consider moving this down
    userName: "",
    signPassword: "",
    name: ""
  };

  addUser = event => {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    event.preventDefault();
    // console.log(event.target)
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.refs.name.value,
        email: this.refs.username.value,
        password: this.refs.password.value
      })
    })
      .then(response => response.json())
      .then(newUser => console.log(newUser))
      .then(
        this.setState({
          userName: "",
          signPassword: "",
          name: ""
        })
      );
  };

  handleChange = event => {
    console.log("typing");
    console.log(event.target);
    //  console.log(event.target.value)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
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
            <Header as="h2" color="violet" textAlign="center">
              <Message style={{ color: "blue" }}>
                <strong>FIN-ALYZE</strong>
              </Message>
              Please Fill Out Below
            </Header>
            <Message info>
              {/* <div id="signup"> */}
              <Form onSubmit={this.addUser}>
                <Form.Field>
                  <input
                    type="text"
                    ref="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    type="email"
                    ref="username"
                    name="userName"
                    placeholder="Email"
                    value={this.state.userName}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    type="password"
                    ref="password"
                    name="signPassword"
                    placeholder="Password"
                    value={this.state.signPassword}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                {/* <input type="password" name="confirmInput" placeholder="Confirm Password" value={this.props.confirmInput} onChange={this.props.handleChange}/> */}
                {/* <input type="submit" value="Submit" /> */}
                <Button type="submit">Submit</Button>
              </Form>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
      // </div>
    );
  }
}
