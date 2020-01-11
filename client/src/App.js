import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
// import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <Header color={"violet"} inverted as="h1">
          World At War
        </Header>
        <HomePage />
      </Segment>
    );
  }
}

export default App;
