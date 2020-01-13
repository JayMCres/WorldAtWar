import React, { Component } from "react";
import { Card, Segment, Button } from "semantic-ui-react";
import Tank from "./Tank";

export default class TanksList extends Component {
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
    // console.log("Tank List Props", this.props);
    const tanksList = Object.values(this.props.tanks).slice(
      this.state.startIdx,
      this.state.endIdx
    );

    // console.log("TanksList", tanksList);
    return (
      <Segment
        inverted
        style={{
          "border-style": "double",
          "border-color": "#6666ff",
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
            this.state.endIdx > Object.values(this.props.tanks).length - 1
          }
        />

        <Card.Group itemsPerRow={3}>
          {tanksList.map((item, index) => {
            return <Tank index={index} key={item.tank_id} {...item} />;
          })}
        </Card.Group>
      </Segment>
    );
  }
}
