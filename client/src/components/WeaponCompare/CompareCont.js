import React, { Component } from "react";
import { Grid, Image, Segment, Message } from "semantic-ui-react";
import CompareOne from "./WeaponOne/CompareOne";
// import WeaponTwo from "./WeaponOne/WeaponTwo";
export default class CompareCont extends Component {
  render() {
    // console.log("Compare Cont", this.props);
    return (
      <Segment
      // style={{
      //   "background-color": "black"
      // }}
      >
        {this.props.compareItems.length < 2 ? (
          <CompareOne weaponOne={this.props.compareItems[0]} />
        ) : (
          <Grid columns="equal">
            <Grid.Column>
              <CompareOne weaponOne={this.props.compareItems[0]} />
            </Grid.Column>
            <Grid.Column>
              <Message>Test</Message>
              {/* <WeaponTwo weapon={this.props.weapons[1]} /> */}
            </Grid.Column>
          </Grid>
        )}
      </Segment>
    );
  }
}
