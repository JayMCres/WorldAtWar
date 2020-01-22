import React, { Component } from "react";
import { Card, Segment, Button } from "semantic-ui-react";
import Plane from "./Plane";

export default class PlanesList extends Component {
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
    const planesList = Object.values(this.props.planes).slice(
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
            this.state.endIdx > Object.values(this.props.planes).length - 1
          }
        />
        <Card.Group itemsPerRow={3}>
          {planesList.map((item, index) => {
            return (
              <Plane
                index={index}
                key={item.plane_id}
                {...item}
                addPlaneArmory={this.props.addPlaneArmory}
                addItemToCompare={this.props.addItemToCompare}
                addItemToDetails={this.props.addItemToDetails}
                handleshowForm={this.props.handleshowForm}
                addWeaponToArmory={this.props.addWeaponToArmory}
                detailsWeapon={this.props.detailsWeapon[0]}
              />
            );
          })}
        </Card.Group>
      </Segment>
    );
  }
}
