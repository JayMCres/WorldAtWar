import React, { Component } from "react";

import { Segment, Grid } from "semantic-ui-react";

import WeaponsCont from "./Weapons/WeaponsCont";
import WeaponSpecCont from "./WeaponSpecs/WeaponSpecCont";
import CompareCont from "./WeaponCompare/CompareCont";
import FavoritesCont from "./Weapons/Favorites/FavoritesCont";
export default class HomePage extends Component {
  state = { compareItems: [], favorites: [] };

  addWeaponToArmory = weapon => {
    // console.log(weapon);
    this.setState({
      favorites: [...this.state.favorites, weapon]
    });
  };
  render() {
    // console.log("MainPage", this.props);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <WeaponSpecCont />
        <Grid
          columns={2}
          divided
          style={{
            "background-color": "black"
          }}
        >
          <Grid.Column width={11}>
            <WeaponsCont
              addWeaponToArmory={this.addWeaponToArmory}
              favorites={this.state.favorites}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <FavoritesCont favorites={this.state.favorites} />
          </Grid.Column>
        </Grid>
        <CompareCont />
      </Segment>
    );
  }
}
