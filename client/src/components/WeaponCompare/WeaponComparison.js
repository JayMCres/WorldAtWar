import React, { Component } from "react";
import { Grid, Image, Segment, Message } from "semantic-ui-react";
import WeaponOne from "./WeaponCont/WeaponOne";
import WeaponTwo from "./WeaponCont/WeaponTwo";

export default class WeaponComparison extends Component {
  render() {
    // console.log("Compare Cont", this.props);
    return (
      <Segment
      // style={{
      //   "background-color": "black"
      // }}
      >
        {this.props.compareItems.length < 2 ? (
          <WeaponOne
            weaponOne={this.props.compareItems[0]}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
          />
        ) : (
          <Grid columns="equal">
            <Grid.Column>
              <WeaponOne
                weaponOne={this.props.compareItems[0]}
                removeWeaponsFromCompareItems={
                  this.props.removeWeaponsFromCompareItems
                }
              />
            </Grid.Column>
            <Grid.Column>
              <WeaponTwo
                weaponTwo={this.props.compareItems[1]}
                removeWeaponsFromCompareItems={
                  this.props.removeWeaponsFromCompareItems
                }
              />
            </Grid.Column>
          </Grid>
        )}
      </Segment>
    );
  }
}
