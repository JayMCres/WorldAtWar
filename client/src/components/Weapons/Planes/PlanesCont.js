import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import PlanesList from "./PlanesList";

class PlanesCont extends Component {
  addPlaneArmory = planeId => {
    const foundPlane = Object.values(this.props.planes).find(
      plane => plane.plane_id === planeId
    );
    // console.log("FoundTanbk", foundTank);
    const favoritePlanes = Object.values(this.props.favorites).filter(item => {
      return item.weaponType === "plane";
    });

    const preventDoubles = Object.values(favoritePlanes).find(item => {
      return item.plane_id === foundPlane.plane_id;
    });
    // console.log("Prevent", preventDoubles);
    if (!preventDoubles) {
      const weaponObj = {
        ...foundPlane,
        weaponType: "plane",
        image: foundPlane.images.small,
        name: foundPlane.name_i18n
      };
      this.props.addWeaponToArmory(weaponObj);
    }
  };
  filterPlanes = () =>
    Object.values(this.props.planes).filter(item => {
      return (
        item.name_i18n
          .toLowerCase()
          .includes(this.props.inputValue.toLowerCase()) ||
        item.type.toLowerCase().includes(this.props.inputValue.toLowerCase()) ||
        item.nation.toLowerCase().includes(this.props.inputValue.toLowerCase())
      );
    });
  render() {
    // console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <PlanesList
          planes={this.filterPlanes()}
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
  planes: state.weapon.planes
});

export default connect(mapStateToProps)(PlanesCont);
