import React, { Component } from "react";
import { List, Segment, Header, Icon } from "semantic-ui-react";
import WeaponTable from "../../Shared/WeaponTable";

export default class PlaneCombatCont extends Component {
  renderWarScore = () => {
    // prettier-ignore
    const weight = 1/15;
    console.log("Weight", weight);
    // prettier-ignore

    const scoreSum = Object.values(this.props.scoreData[0]).reduce(( acc, item )=>  {
      
      let num =  item * weight
      console.log("items", item, weight)
      return acc + num },0)
    // console.log("Total Score", scoreSum);
    return scoreSum / 15;
  };
  render() {
    // console.log("Plane Combat Cont Props", this.props.combat);

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
          <WeaponTable tableData={this.props.combat} />
        </Segment>
      </Segment>
    );
  }
}
