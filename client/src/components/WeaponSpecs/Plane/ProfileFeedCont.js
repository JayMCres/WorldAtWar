import React, { Component } from "react";
import { Image, List, Segment } from "semantic-ui-react";
// import { fetchPlane } from "../../../actions/weapons";
import { connect } from "react-redux";
import ProfileFeed from "./ProfileFeed";

class ProfileFeedCont extends Component {
  render() {
    // console.log("Plane Profile Feed Cont Props", this.props);

    const planeObj = this.props.plane.map((item, index) => {
      const details = { ...item[1] };
      const obj = { ...item[0] };

      return {
        ...obj,
        ...details
      };
    });
    console.log("planeObj", planeObj);

    const planeArray = planeObj.map((item, index) => {
      const engine = [item.engine].map(item => {
        const obj = { ...item };
        const newObj = { ...obj[0] };
        return {
          Engine: newObj.name_i18n,
          "Engine Type": newObj.equipment_type
        };
      });
      const bomb = [item.bomb].map(item => {
        const obj = { ...item };
        const newObj = { ...obj[0] };
        // console.log(newObj);
        return {
          Bomb: newObj.name_i18n,
          "Explosion Radius": newObj.explosion_radius
        };
      });
      const gun = [item.gun].map(item => {
        const obj = { ...item };
        const newObj = { ...obj[0] };
        // console.log(newObj);
        return {
          Gun: newObj.name_i18n,
          "Gun Type": newObj.type_i18n
        };
      });

      return {
        "Rate of Climb": item.rate_of_climbing,
        Control: item.controllability,
        "Dive Speed": item.dive_speed,
        "Horse Power": item.hp,
        "Stall Speed": item.stall_speed,
        Roll: item.roll_maneuverability,
        Maneuverability: item.maneuverability,
        Speed: item.max_speed,
        "Turn Time": item.average_turn_time,
        Altitude: item.optimal_height,
        ...engine[0],
        ...bomb[0],
        ...gun[0]
      };
    });

    console.log("planeArray", planeArray);

    return (
      <List animated verticalAlign="middle" divided>
        <ProfileFeed profileData={planeArray[0]} />
        {/* {planeArray.map((item, index) => {
          return <ProfileFeed key={index} {...item} />;
        })} */}
      </List>
    );
  }
}
const mapStateToProps = state => ({
  plane: [state.weapon.plane]
});

export default connect(mapStateToProps)(ProfileFeedCont);
