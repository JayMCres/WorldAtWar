import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";
import { fetchPlaneOne } from "../../../../actions/weapon";
import { connect } from "react-redux";
import PlaneOneFetch from "./PlaneOneFetch";
// import PlaneOneCompare from "./PlaneOneCompare";

class FetchDetailsOne extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPlaneOne(this.props.weapon.id));
  }

  render() {
    console.log("PlaneDetailsFetch Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        {this.props.plane === null ? (
          <Message>Loading</Message>
        ) : (
          <PlaneOneFetch weapon={this.props.weapon} />
        )}
      </Segment>
    );
  }
}

export default connect(null)(FetchDetailsOne);
