import React, { Component } from "react";
import ProfileFeedCont from "./ProfileFeedCont";
import { Segment, Image, Header, Message, Item, List } from "semantic-ui-react";

class ShipSpec extends Component {
  render() {
    // console.log("Ship Spec Props", this.props);
    const profileData = [this.props.default_profile].map(item => {
      return {
        Engine: item.engine.engine_id_str,
        Speed: item.engine.max_speed,
        "Anti-Aircraft Gun I": item.anti_aircraft.slots[0].name,
        "Anti-Aircraft Gun I Caliber": item.anti_aircraft.slots[0].caliber,
        "Anti-Aircraft Gun II": item.anti_aircraft.slots[1].name,
        "Anti-Aircraft Gun II Caliber": item.anti_aircraft.slots[1].caliber,
        "Anti-Aircraft Gun III": item.anti_aircraft.slots[2].name,
        "Anti-Aircraft Gun III Caliber": item.anti_aircraft.slots[2].caliber,
        "Rudder Time": item.mobility.rudder_time,
        "Turning Radius": item.mobility.turning_radius,
        "Plane Detection": item.concealment.detect_distance_by_plane,
        "Ship Detection": item.concealment.detect_distance_by_ship
      };
    });

    // console.log("profileData", profileData);

    return (
      <Segment
        style={{
          "background-color": "#00008B"
        }}
      >
        <Segment
          attached="top"
          style={{
            minHeight: 200
          }}
        >
          <Item.Group>
            <Item
              style={{
                "background-color": "white"
              }}
            >
              <Item.Image
                style={{
                  "background-color": "black"
                }}
                src={this.props.images.small}
              />

              <Item.Content>
                <br></br>
                <Item.Header as="a">{this.props.name}</Item.Header>
                <Item.Description style={{ "font-size": "10px" }}>
                  <p>{this.props.description}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment
          attached="bottom"
          style={{
            overflow: "auto",
            maxHeight: 150,
            minHeight: 150
          }}
        >
          <ProfileFeedCont profile={profileData} />
        </Segment>
      </Segment>
    );
  }
}

export default ShipSpec;
