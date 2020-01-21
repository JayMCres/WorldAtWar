import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";

import HomePage from "./HomePage";
import { fetchTanks, fetchPlanes, fetchShips } from "../actions/weapon";
import { fetchWeapons, fetchAllWeapons } from "../actions/weapons";
import { fetchFavorites, fetchUserFavorites } from "../actions/favorites";

import { connect } from "react-redux";

class MainCont extends Component {
  async componentDidMount() {
    this.props.dispatch(fetchTanks());
    this.props.dispatch(fetchPlanes());
    this.props.dispatch(fetchShips());
    // this.props.dispatch(fetchAllWeapons());
    this.props.dispatch(fetchWeapons());
    this.props.dispatch(fetchFavorites());
    // this.props.dispatch(fetchUserFavorites(this.props.currentUser.id));
  }
  render() {
    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <Header color={"violet"} inverted as="h1">
          World At War
        </Header>
        <HomePage currentUser={this.props.currentUser} />
      </Segment>
    );
  }
}

export default connect(null)(MainCont);
