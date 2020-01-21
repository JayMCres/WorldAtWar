import React, { Component } from "react";
import { Segment, Header, Icon, Message } from "semantic-ui-react";
import WeaponSpec from "./Tanks/TankSpec";
export default class DetailsContainer extends Component {
  render() {
    console.log(" DetailsContainer ", this.props);
    return (
      <Segment>
        <WeaponSpec />
      </Segment>
    );
  }
}
