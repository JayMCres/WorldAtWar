import React, { Component } from "react";

import { Segment, Grid } from "semantic-ui-react";

import WeaponsCont from "./Weapons/WeaponsCont";
import WeaponSpecCont from "./WeaponSpecs/WeaponSpecCont";
import CompareCont from "./WeaponCompare/CompareCont";
export default class HomePage extends Component {
  state = { compareItems: [] };
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
          style={{
            "background-color": "black"
          }}
        >
          <Grid.Column width={12}>
            <WeaponsCont />
          </Grid.Column>
          <Grid.Column width={4}>Test</Grid.Column>
        </Grid>
        <CompareCont />
      </Segment>
    );
  }
}
