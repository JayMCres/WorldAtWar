import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import TanksList from "./TanksList";

class TanksCont extends Component {
  filterTanks = () =>
    Object.values(this.props.tanks).filter(item => {
      return (
        item.name.toLowerCase().includes(this.props.inputValue.toLowerCase()) ||
        item.type.toLowerCase().includes(this.props.inputValue.toLowerCase()) ||
        item.nation.toLowerCase().includes(this.props.inputValue.toLowerCase())
      );
    });
  render() {
    console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <TanksList tanks={this.filterTanks()} />;
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  tanks: state.weapons.tanks
});

export default connect(mapStateToProps)(TanksCont);
