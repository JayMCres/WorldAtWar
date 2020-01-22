import React, { Component } from "react";
import { Card, Segment, Button } from "semantic-ui-react";
import Ship from "./Ship";

export default class ShipsList extends Component {
  state = {
    startIdx: 0,
    endIdx: 3
  };
  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 3,
        endIdx: prevState.endIdx + 3
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 3,
        endIdx: prevState.endIdx - 3
      };
    });
  };

  render() {
    // console.log("Plane List Props", this.props);
    const shipsList = Object.values(this.props.ships).slice(
      this.state.startIdx,
      this.state.endIdx
    );

    // console.log("planesList", planesList);
    return (
      <Segment
        inverted
        style={{
          "background-color": "black",
          minHeight: 70
        }}
      >
        <Button
          basic
          inverted
          color="violet"
          floated="left"
          onClick={() => this.showLess()}
          content="Back"
          icon="left arrow"
          labelPosition="left"
          disabled={this.state.startIdx === 0}
        />
        <Button
          basic
          inverted
          color="violet"
          floated="right"
          onClick={() => this.showMore()}
          content="Next"
          icon="right arrow"
          labelPosition="right"
          disabled={
            this.state.endIdx > Object.values(this.props.ships).length - 1
          }
        />

        <Card.Group itemsPerRow={3}>
          {shipsList.map((item, index) => {
            return (
              <Ship
                index={index}
                key={item.ship_id}
                {...item}
                addShipArmory={this.props.addShipArmory}
                addItemToCompare={this.props.addItemToCompare}
                addItemToDetails={this.props.addItemToDetails}
                handleshowForm={this.props.handleshowForm}
                addWeaponToArmory={this.props.addWeaponToArmory}
                // detailsWeapon={this.props.detailsWeapon[0]}
              />
            );
          })}
        </Card.Group>
      </Segment>
    );
  }
}
