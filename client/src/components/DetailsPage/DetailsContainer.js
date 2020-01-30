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
      return WEAPONS_PAGES[link];
    };
    return (
      <Segment
        style={{
          "background-color": "black"
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
