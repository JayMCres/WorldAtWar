import React, { Component } from "react";
import ProfileFeedCont from "./ProfileFeedCont";
import { Segment, Image, Header, Message, Item, List } from "semantic-ui-react";

class TankSpec extends Component {
  render() {
    // console.log("Tank Spec Props", this.props);
    const profileData = [this.props.default_profile].map(item => {
      return {
        Weight: item.weight + " " + "Tons",
        Firepower: item.firepower,
        "Shells Type": item.shells[0].type.toLowerCase(),
        // "Shells Type Two": item.shells[1].type.toLowerCase(),
        "Turret Armor": item.armor.turret.front,
        "Front Armor": item.armor.hull.front,
        "Side Armor": item.armor.hull.sides,
        "Back Armor": item.armor.hull.rear,
        Speed: item.speed_forward,
        Engine: item.engine.name,
        Power: item.engine.power,
        Ammo: item.max_ammo,
        "Horse Power": item.hp,
        Protection: item.protection,
        Range: item.battle_level_range_max,
        Gun: item.gun.name,
        "Turret View Range": item.turret.view_range,
        Maneuverability: item.maneuverability
      };
    });

    return (
      <Segment
        style={{
          "background-color": "#669999"
        }}
      >
        <Segment
          attached="top"
          style={{
            minHeight: 200,
            "background-color": "black"
          }}
        >
          <Item.Group>
            <Item
              style={{
                "background-color": "white"
              }}
              verticalAlign="middle"
            >
              <Item.Image
                style={{
                  // "background-color": "black",
                  padding: "10px 10px 10px 10px"
                }}
                src={this.props.images.preview}
                verticalAlign="middle"
                centered
              />

              <Item.Content
                style={{
                  "background-color": "#F5F5F5"
                }}
              >
                <br></br>
                <Item.Header as="a">{this.props.name}</Item.Header>
                <Item.Description
                  style={{
                    "font-size": "10px",
                    padding: "10px 10px 10px 10px"
                  }}
                >
                  <p>{this.props.description}</p>
                </Item.Description>
                <br></br>
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

export default TankSpec;
