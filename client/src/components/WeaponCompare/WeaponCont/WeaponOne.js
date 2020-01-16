import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import TankCompare from "../WeaponTypes/TankCompare";
import ShipCompare from "../WeaponTypes/ShipCompare";
import PlaneDetailsFetch from "../WeaponTypes/PlaneDetailsFetch";
export default class WeaponCOne extends Component {
  render() {
    const renderWeaponPage = type => {
      const WEAPON_PAGES = {
        tank: (
          <TankCompare
            weapon={this.props.weaponOne}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
          />
        ),
        plane: (
          <PlaneDetailsFetch
            weapon={this.props.weaponOne}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
          />
        ),
        ship: (
          <ShipCompare
            weapon={this.props.weaponOne}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
          />
        )
      };
      return <div>{WEAPON_PAGES[type]}</div>;
    };
    return (
      <Segment>
        <Label as="a" corner="right" color="red">
          <Icon
            name="remove"
            onClick={() =>
              this.props.removeWeaponsFromCompareItems(this.props.weaponOne.id)
            }
          />
        </Label>
        {renderWeaponPage(this.props.weaponOne.weaponType)}
      </Segment>
    );
  }
}
