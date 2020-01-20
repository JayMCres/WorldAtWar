import React, { Component } from "react";
import {
  Card,
  Image,
  Segment,
  Grid,
  Table,
  Icon,
  Header
} from "semantic-ui-react";
import { connect } from "react-redux";

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
    console.log(
      "Battle Cont Props",
      Object.values(this.state.battleWinner.profile)
    );

    const winnerProfile = this.state.battleWinner.profile[0];

    const loserProfile = this.state.battleLoser.profile[0];

    return (
      <Segment>
        <Grid columns={3}>
          <Grid.Column width={2} centered>
            <Card>
              <Image src={this.state.battleWinner.card} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{this.state.battleWinner.name}</Card.Header>

                <Card.Description>
                  {this.state.battleWinner.name + " is the Winner"}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column
            width={7}
            style={{
              overflow: "auto",
              maxHeight: 250,
              minHeight: 250
            }}
          >
            <Header as="h3">
              <Icon name="settings" />
              <Header.Content>
                Winner - {this.state.battleWinner.name}
              </Header.Content>
            </Header>
            <Table celled striped>
              <Table.Body>
                {Object.entries(winnerProfile).map(([key, value]) => {
                  let label = key
                    .split("_")
                    .map(word => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    })
                    .join();

                  return (
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="folder" />
                      </Table.Cell>
                      <Table.Cell>{label.replace(/,/g, " ")}</Table.Cell>
                      <Table.Cell collapsing textAlign="right">
                        {value}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Grid.Column>

          <Grid.Column
            width={7}
            style={{
              overflow: "auto",
              maxHeight: 250,
              minHeight: 250
            }}
          >
            <Header as="h3">
              <Icon name="settings" />
              <Header.Content>
                Loser - {this.state.battleLoser.name}
              </Header.Content>
            </Header>
            <Table celled striped>
              <Table.Body>
                {Object.entries(loserProfile).map(([key, value]) => {
                  let label = key
                    .split("_")
                    .map(word => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    })
                    .join();

                  return (
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="folder" />
                      </Table.Cell>
                      <Table.Cell>{label.replace(/,/g, " ")}</Table.Cell>
                      <Table.Cell collapsing textAlign="right">
                        {value}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
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
