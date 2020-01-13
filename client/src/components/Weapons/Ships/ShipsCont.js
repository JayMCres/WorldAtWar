import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import ShipsList from "./ShipsList";

class ShipsCont extends Component {
  filterShips = () =>
    Object.values(this.props.ships).filter(item => {
      return (
        item.name.toLowerCase().includes(this.props.inputValue.toLowerCase()) ||
        item.type.toLowerCase().includes(this.props.inputValue.toLowerCase()) ||
        item.nation.toLowerCase().includes(this.props.inputValue.toLowerCase())
      );
    });
  render() {
    // console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <ShipsList ships={this.filterShips()} />;
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  ships: state.weapons.ships
});

export default connect(mapStateToProps)(ShipsCont);
