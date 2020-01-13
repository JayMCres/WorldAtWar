import React, { Component } from "react";
import ProfileFeedCont from "./ProfileFeedCont";
import { Segment, Image, Card, Icon, Grid } from "semantic-ui-react";
import WeaponCard from "./WeaponCard";
class ShipSpec extends Component {
  state = { showDetails: true };
  handleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };
  render() {
    // console.log("Ship Spec Props", this.props);
    const profileData = [this.props.default_profile].map(item => {
      return {
        Engine: item.engine.engine_id_str,
        Speed: item.engine.max_speed + " " + "knots",
        // "Main Gun": item.atbas.slots[0].name,
        // "Anti-Aircraft Main Gun ": item.anti_aircraft.slots[0].name,
        // "Anti-Aircraft Secondary Gun ": item.anti_aircraft.slots[1].name,
        // "Anti-Aircraft Gun III": item.anti_aircraft.slots[2].name,
        // "Anti-Aircraft Gun III Caliber": item.anti_aircraft.slots[2].caliber,
        "Rudder Time": item.mobility.rudder_time,
        "Turning Radius": item.mobility.turning_radius + " " + "miles",
        "Plane Detection":
          item.concealment.detect_distance_by_plane + " " + "miles",
        "Ship Detection":
          item.concealment.detect_distance_by_ship + " " + "miles"
      };
    });

    // console.log("profileData", profileData);

    return (
      <Segment
        style={{
          "background-color": "#00008B"
        }}
      >
        <Grid
          style={{
            "background-color": "white"
          }}
        >
          <Grid.Column width={6}>
            <WeaponCard
              images={this.props.images}
              name={this.props.name}
              handleShowDetails={this.handleShowDetails}
            />
          </Grid.Column>
          <Grid.Column
            width={10}
            style={{
              overflow: "auto",
              maxHeight: 200,
              minHeight: 200
            }}
          >
            <ProfileFeedCont profile={profileData} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default ShipSpec;
