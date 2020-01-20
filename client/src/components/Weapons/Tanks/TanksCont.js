import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import TanksList from "./TanksList";

class TanksCont extends Component {
  addTankArmory = tankId => {
    const foundTank = Object.values(this.props.tanks).find(
      tank => tank.tank_id === tankId
    );
    // console.log("FoundTanbk", foundTank);
    const favoriteTanks = Object.values(this.props.favorites).filter(item => {
      return item.weaponType === "tank";
    });

    const preventDoubles = Object.values(favoriteTanks).find(item => {
      return item.tank_id === foundTank.tank_id;
    });
    // console.log("Prevent", preventDoubles);
    if (!preventDoubles) {
      const weaponObj = {
        ...foundTank,
        weaponType: "tank",
        image: foundTank.images.preview,
        card: foundTank.images.normal,
        name: foundTank.name,
        id: foundTank.tank_id
      };
      this.props.addWeaponToArmory(weaponObj);
    }
  };
  filterTanks = () =>
    Object.values(this.props.tanks).filter(item => {
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
          "border-style": "double",
          "border-color": "#6666ff",
          "background-color": "#F5F5F5"
        }}
      >
        <TanksList
          tanks={this.filterTanks()}
          addWeaponToArmory={this.props.addWeaponToArmory}
          addItemToCompare={this.props.addItemToCompare}
          addItemToDetails={this.props.addItemToDetails}
          handleshowForm={this.props.handleshowForm}
          detailsWeapon={this.props.detailsWeapon}
        />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  tanks: state.weapon.tanks
});

export default connect(mapStateToProps)(TanksCont);
