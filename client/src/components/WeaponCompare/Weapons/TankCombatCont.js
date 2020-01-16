import React, { Component } from "react";
import { Header, Segment, List, Icon } from "semantic-ui-react";
import WeaponTable from "../Shared/WeaponTable";
export default class TankCombatCont extends Component {
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
    // console.log("Compare One State", this.state);
    // console.log("TankCombatCont", this.props);

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
            maxHeight: 175,
            minHeight: 175
          }}
        >
          <WeaponTable tableData={this.props.combat[0]} />
        </Segment>
      </Segment>
    );
  }
}
