import React, { Component } from "react";
import { Image, List, Segment } from "semantic-ui-react";
// import { fetchPlane } from "../../../actions/weapons";
import { connect } from "react-redux";
import ProfileFeed from "./ProfileFeed";

class ProfileFeedCont extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchPlane(this.props.id));
  // }

  // startCarousel = () => {
  //   this.carouselInterval = setInterval(() => {
  //     this.handleFeed();
  //   }, 1000);
  // };

  // showMoreFeed = () => {
  //   this.setState(prevState => {
  //     return {
  //       startIdx: prevState.startIdx + 5,
  //       endIdx: prevState.endIdx + 5
  //     };
  //   });
  // };

  // handleFeed = () => {
  //   if (this.state.endIdx === this.props.profile - 1) {
  //     this.setState({
  //       startIdx: 0,
  //       endIdx: 5
  //     });
  //   }
  //   this.showMoreFeed();
  // };

  // componentWillUnmount() {
  //   clearInterval(this.carouselInterval);
  // }
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
    // console.log("planeObj", planeObj);

    const planeArray = planeObj.map((item, index) => {
      // console.log(item);
      const specification = { ...item.specification };
      console.log(specification);
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
        "Rate of Climb": specification.rate_of_climbing,
        Control: specification.controllability,
        "Dive Speed": specification.dive_speed,
        "Horse Power": specification.hp,
        "Stall Speed": specification.stall_speed,
        Roll: specification.roll_maneuverability,
        Maneuverability: specification.maneuverability,
        Speed: specification.max_speed,
        "Turn Time": specification.average_turn_time,
        Altitude: specification.optimal_height,
        ...engine[0],
        ...bomb[0],
        ...gun[0]
      };
    });

    console.log("plane array", planeArray);
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
  plane: [state.weapons.plane]
});

export default connect(mapStateToProps)(ProfileFeedCont);
