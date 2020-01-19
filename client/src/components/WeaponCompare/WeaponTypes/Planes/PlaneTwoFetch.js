import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";

import { connect } from "react-redux";
import PlaneTwoCompare from "./PlaneTwoCompare";

export default class PlaneTwoFetch extends Component {
  render() {
    // console.log("Plane One Fetch Props", this.props);
    // console.log("Plane One Fetch State", this.state);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <PlaneTwoCompare weapon={this.props.weapon} />
      </Segment>
    );
  }
}
