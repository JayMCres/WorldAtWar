import React, { Component } from "react";
import { Segment, Grid, Label, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import BattleWinner from "./BattleWinner";
import BattleLoser from "./BattleLoser";

class BattleCont extends Component {
  state = { battleWinner: [], battleLoser: [] };

  componentWillMount() {
    if (this.props.compareItems.length === 2) {
      if (this.props.scoreOne > this.props.scoreTwo) {
        return this.setState({
          battleWinner: this.props.compareItems[0],
          battleLoser: this.props.compareItems[1]
        });

        //    alert(this.state.compareItems[0].name + " " + "Wins")
      } else if (this.props.scoreOne < this.props.scoreTwo) {
        return this.setState({
          battleWinner: this.props.compareItems[1],
          battleLoser: this.props.compareItems[0]
        });
      } else {
        alert("The Battle has Resulted in a Tie");
      }
    }
  }

  render() {
    // console.log("Battle Cont state", this.state);

    const winnerProfile = this.state.battleWinner.profile[0];

    const loserProfile = this.state.battleLoser.profile[0];

    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <Label
          size="medium"
          as="a"
          corner="right"
          color="red"
          onClick={() => this.props.handleShowBattlePage()}
        >
          <Icon name="remove" />
        </Label>
        <Grid
          columns={2}
          style={{
            "background-color": "#F5F5F5"
          }}
        >
          <Grid.Column width={8}>
            <BattleWinner
              weapon={this.state.battleWinner}
              profile={winnerProfile}
            />
          </Grid.Column>

          <Grid.Column width={8}>
            <BattleLoser
              weapon={this.state.battleLoser}
              profile={loserProfile}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  scoreOne: state.weapon.scoreOne,
  scoreTwo: state.weapon.scoreTwo
});
export default connect(mapStateToProps)(BattleCont);
