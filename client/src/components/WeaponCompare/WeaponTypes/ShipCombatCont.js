import React, { Component } from "react";
import { List, Segment, Header, Icon } from "semantic-ui-react";
import WeaponTable from "../Shared/WeaponTable";

export default class ShipCombatCont extends Component {
  renderWarScore = () => {
    // prettier-ignore
    const weight = (1/this.props.combat.length);

    // prettier-ignore

    const scoreSum = this.props.scoreData.reduce(( acc, item )=>  {
      // console.log(weight)
      const num = item * weight
      return acc + num },0)
    // console.log("Total Score", scoreSum);
    return scoreSum / this.props.combat.length;
  };
  render() {
    // console.log("ShipCombatCont", this.props);

    return (
      <Segment>
        <Header as="h2" dividing>
          <Icon name="crosshairs" />
          <Header.Content>Combat Profile</Header.Content>
        </Header>
        <List>
          <List.Item>
            <List.Content floated="right">{this.renderWarScore()}</List.Content>
            <List.Content>Combat Score</List.Content>
          </List.Item>
        </List>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: 200,
            minHeight: 200
          }}
        >
          <WeaponTable tableData={this.props.combat[0]} />
        </Segment>
      </Segment>
    );
  }
}
