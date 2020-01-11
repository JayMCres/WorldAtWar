import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import PlanesList from "./PlanesList";

class PlanesCont extends Component {
  render() {
    // console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <PlanesList planes={this.props.planes} />;
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  planes: state.weapons.planes
});

export default connect(mapStateToProps)(PlanesCont);
