import React, { Component } from "react";
import { fetchTanks } from "../actions/tanks";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import TanksCont from "./Weapons/Tanks/TanksCont";

class HomePage extends Component {
  async componentDidMount() {
    this.props.dispatch(fetchTanks());
  }
  render() {
    // console.log("MainPage", this.props);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        >
        <TanksCont />
      </Segment>
    );
  }
}

export default connect(null)(HomePage);
