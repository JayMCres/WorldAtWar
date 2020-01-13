import React, { Component } from "react";
import WeaponCard from "./WeaponCard";
import ProfileFeedCont from "./ProfileFeedCont";
import { Segment, Grid, Header, Icon } from "semantic-ui-react";

class TankSpec extends Component {
  state = { showDetails: true };
  handleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };
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
      <Segment>
        <Grid
          style={{
            "background-color": "white"
          }}
        >
          <Grid.Column
            width={6}
            style={{
              minHeight: 200
            }}
          >
            <WeaponCard
              images={this.props.images}
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

export default TankSpec;
