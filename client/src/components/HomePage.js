import React, { Component } from "react";
import { fetchTanks } from "../actions/weapons";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import WeaponsCont from "./Weapons/WeaponsCont";

export default class HomePage extends Component {
  render() {
    // console.log("MainPage", this.props);
    return <WeaponsCont />;
  }
}
