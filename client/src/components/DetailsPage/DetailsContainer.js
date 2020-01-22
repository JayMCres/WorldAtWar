import React, { Component } from "react";
import { Segment, Header, Icon, Message } from "semantic-ui-react";
import TankSpec from "./Tank/TankSpec";
import ShipSpec from "./Ship/ShipSpec";
import PlaneSpec from "./Plane/PlaneSpecCont";
export default class DetailsContainer extends Component {
  render() {
    console.log(" DetailsContainer ", this.props);

    const onMenuClick = link => {
      const WEAPONS_PAGES = {
        tank: <TankSpec />,
        plane: <PlaneSpec />,
        ship: <ShipSpec />
      };
      return <div>{WEAPONS_PAGES[link]}</div>;
    };
    return (
      <Segment>
        {/* <TankSpec /> */}
        {onMenuClick(this.props.type)}
      </Segment>
    );
  }
}
