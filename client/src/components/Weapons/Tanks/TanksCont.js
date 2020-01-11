import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import TanksList from "./TanksList";

class TanksCont extends Component {
  render() {
    // console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <TanksList tanks={this.props.tanks} />;
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  tanks: state.tanks.tanks
});

export default connect(mapStateToProps)(TanksCont);
