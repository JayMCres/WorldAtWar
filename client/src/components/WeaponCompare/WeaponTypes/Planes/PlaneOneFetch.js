import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";

import { connect } from "react-redux";
import PlaneOneCompare from "./PlaneOneCompare";

class PlaneOneFetch extends Component {
  render() {
    // console.log("Plane One Fetch Props", this.props);
    // console.log("Plane One Fetch State", this.state);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <PlaneOneCompare weapon={this.props.weapon} />
        {/* {this.props.plane === {} ? (
          <Message>Loading</Message>
        ) : (
          <PlaneOneCompare
            weapon={this.props.weapon}
            plane={this.props.plane}
          />
        )} */}
      </Segment>
    );
  }
}
// const mapStateToProps = state => ({
//   // profile: state.weapon.planeOne.profile,
//   // combat: state.weapon.planeOne.combat,
//   // bombs: state.weapon.planeOne.guns,
//   // guns: state.weapon.planeOne.bombs,
//   plane: state.weapon.planeOne
// });

export default connect(null)(PlaneOneFetch);
