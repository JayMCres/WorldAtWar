import React, { Component } from "react";
import { Header, Segment, List, Icon } from "semantic-ui-react";
import WeaponTable from "../../Shared/WeaponTable";
export default class TankCombatCont extends Component {
  render() {
    // console.log("Compare One State", this.state);
    // console.log("TankCombatCont", this.state);

    return (
      <Segment>
        {/* {this.state.warScore === null
          ? null
          : () => this.props.setBatteScores(this.state.warScore)} */}
        <List>
          <List.Item>
            <List.Content floated="right">{this.props.score}</List.Content>
            <List.Content>Combat Score</List.Content>
          </List.Item>
        </List>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: 220,
            minHeight: 220
          }}
        >
          <WeaponTable tableData={this.props.combat[0]} />
        </Segment>
      </Segment>
    );
  }
}
