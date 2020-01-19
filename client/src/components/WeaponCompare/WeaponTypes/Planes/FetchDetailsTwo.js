import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";
import { fetchPlaneTwo } from "../../../../actions/weapon";
import { connect } from "react-redux";
import PlaneTwoFetch from "./PlaneTwoFetch";

class FetchDetailsTwo extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPlaneTwo(this.props.weapon.id));
  }

  c;
  //   handleFetchPlane = async (planeId)=>{
  // const details = await
  //   }

  render() {
    // console.log("PlaneDetailsFetch Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <PlaneTwoFetch weapon={this.props.weapon} />
      </Segment>
    );
  }
}

export default connect(null)(FetchDetailsTwo);
