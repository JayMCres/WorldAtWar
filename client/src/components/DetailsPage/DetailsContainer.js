import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import TankSpec from "./Tank/TankSpec";
import ShipSpec from "./Ship/ShipSpec";
import PlaneSpec from "./Plane/PlaneSpecCont";
export default class DetailsContainer extends Component {
  render() {
    // console.log(" DetailsContainer ", this.props);

    const onMenuClick = link => {
      const WEAPONS_PAGES = {
        tank: <TankSpec />,
        plane: <PlaneSpec />,
        ship: <ShipSpec />
      };
      return <div>{WEAPONS_PAGES[link]}</div>;
    };
    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <Label as="a" corner="right" color="red">
          <Icon
            name="remove"
            onClick={() => this.props.handleCloseDetails()}
            // disabled={this.props.detailsWeapon.pictureone }
          />
        </Label>

        {onMenuClick(this.props.type)}
      </Segment>
    );
  }
}
