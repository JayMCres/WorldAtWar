import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import ShipsList from "./ShipsList";

class ShipsCont extends Component {
  render() {
    // console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <ShipsList ships={this.props.ships} />;
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  ships: state.weapons.ships
});

export default connect(mapStateToProps)(ShipsCont);
