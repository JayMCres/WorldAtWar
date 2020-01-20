import React, { Component } from "react";
import { Grid, Image, Segment, Button, Label, Icon } from "semantic-ui-react";
import WeaponOne from "./WeaponCont/WeaponOne";
import WeaponTwo from "./WeaponCont/WeaponTwo";
// import WinnerCont from "./WinnerCont";

export default class WeaponComparison extends Component {
  state = { commenceBattle: false };

  letsBattle = () => {
    if (this.state.compareItems.length === 2) {
      if (this.state.scores[0] > this.state.scores[1]) {
        return this.setState({
          battleWinner: this.state.compareItems[0]
        });

        //    alert(this.state.compareItems[0].name + " " + "Wins")
      } else if (this.state.scores[0] < this.state.scores[1]) {
        return this.setState({
          battleWinner: this.state.compareItems[1]
        });
      } else if (this.state.scores[0] === this.state.scores[1]) {
        alert("The Battle has Resulted in a Tie");
      } else {
        return this.setState({
          battleWinner: null
        });
      }
    }
  };
  render() {
    console.log(" Weapon Compare Main Cont", this.props);
    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        {this.props.compareItems.length < 2 ? (
          <WeaponOne
            weaponOne={this.props.compareItems[0]}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
            setBattleScores={this.setBattleScores}
          />
        ) : (
          <Grid columns="equal">
            <Grid.Column>
              <WeaponOne
                weaponOne={this.props.compareItems[0]}
                removeWeaponsFromCompareItems={
                  this.props.removeWeaponsFromCompareItems
                }
                setBattleScores={this.setBattleScores}
              />
            </Grid.Column>
            <Grid.Column>
              <WeaponTwo
                weaponTwo={this.props.compareItems[1]}
                removeWeaponsFromCompareItems={
                  this.props.removeWeaponsFromCompareItems
                }
                setBattleScores={this.setBattleScores}
              />
            </Grid.Column>
          </Grid>
        )}
        <br></br>
        <Button
          fluid
          size="mini"
          icon
          // labelPosition="right"
          onClick={() => this.props.handleShowBattlePage()}
          disabled={this.props.compareItems.length < 2}
        >
          <Icon name="pause" />
          Battle
        </Button>
      </Segment>
    );
  }
}
