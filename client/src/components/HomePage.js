import React, { Component } from "react";
import { fetchTanks } from "../actions/weapons";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
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
        <WeaponsCont />
        <CompareCont />
      </Segment>
    );
  }
}
