import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
// import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import { fetchTanks, fetchPlanes, fetchShips } from "./actions/weapon";
import { fetchWeapons, fetchAllWeapons } from "./actions/weapons";

import { connect } from "react-redux";

class App extends Component {
  async componentDidMount() {
    this.props.dispatch(fetchTanks());
    this.props.dispatch(fetchPlanes());
    this.props.dispatch(fetchShips());
    this.props.dispatch(fetchAllWeapons());
    this.props.dispatch(fetchWeapons());
  }
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

export default connect(null)(App);
