import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";
import { fetchPlane } from "../../../actions/weapon";
import { connect } from "react-redux";
import PlaneCompare from "./PlaneCompare";

class PlaneDetailsFetch extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlane(this.props.weapon.id));
  }
  render() {
    // console.log("PlaneDetailsFetch Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <PlaneCompare />
      </Segment>
    );
  }
}

export default connect(null)(PlaneDetailsFetch);
