import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import ShipsList from "./ShipsList";

class ShipsCont extends Component {
  addShipArmory = shipId => {
    const foundShip = Object.values(this.props.ships).find(
      ship => ship.ship_id === shipId
    );
    // console.log("FoundTanbk", foundTank);
    const favoriteShips = Object.values(this.props.favorites).filter(item => {
      return item.weaponType === "ship";
    });

    const preventDoubles = Object.values(favoriteShips).find(item => {
      return item.ship_id === foundShip.ship_id;
    });
    // console.log("Prevent", preventDoubles);
    if (!preventDoubles) {
      const weaponObj = {
        ...foundShip,
        weaponType: "ship",
        image: foundShip.images.small,
        card: foundShip.images.large,
        name: foundShip.name.slice(1, -1)
      };
      this.props.addWeaponToArmory(weaponObj);
    }
  };
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
        <ShipsList
          ships={this.filterShips()}
          addShipArmory={this.addShipArmory}
          addItemToCompare={this.props.addItemToCompare}
          addItemToDetails={this.props.addItemToDetails}
        />
        ;
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  ships: state.weapons.ships
});

export default connect(mapStateToProps)(ShipsCont);
