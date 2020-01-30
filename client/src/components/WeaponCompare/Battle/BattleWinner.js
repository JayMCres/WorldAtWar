import React, { Component } from "react";
import { Segment, Grid, Icon, Header } from "semantic-ui-react";
import BattleCard from "./BattleCard";
import BattleTable from "./BattleTable";

export default class BattleWinner extends Component {
  render() {
    console.log("Battle Winner Props", this.props);

    return (
      <Segment
      // style={{
      //   "background-color": "#F5F5F5"
      // }}
      >
        <Grid
          columns={2}
          // style={{
          //   "background-color": "#F5F5F5"
          // }}
        >
          <Grid.Column width={6}>
            <BattleCard weapon={this.props.weapon} />
          </Grid.Column>

          <Grid.Column width={10}>
            <Segment attached="top">
              <Header as="h3" color="green">
                <Icon name="settings" />
                <Header.Content>
                  WINNER - {this.props.weapon.name}
                </Header.Content>
              </Header>
            </Segment>
            <Segment
              attached="bottom"
              style={{
                overflow: "auto",
                maxHeight: 210,
                minHeight: 210
              }}
            >
              <BattleTable profile={this.props.profile} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
