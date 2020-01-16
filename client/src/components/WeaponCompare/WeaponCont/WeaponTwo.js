import React, { Component } from "react";
import { Segment, Icon, Label } from "semantic-ui-react";
import TankCompare from "../WeaponTypes/TankCompare";
import ShipCompare from "../WeaponTypes/ShipCompare";

export default class WeaponTwo extends Component {
  render() {
    const renderWeaponPage = type => {
      const WEAPON_PAGES = {
        tank: (
          <TankCompare
            weapon={this.props.weaponTwo}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
          />
        ),
        plane: <div>plane</div>,
        ship: (
          <ShipCompare
            weapon={this.props.weaponTwo}
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
              this.props.removeWeaponsFromCompareItems(this.props.weaponTwo.id)
            }
          />
        </Label>
        {renderWeaponPage(this.props.weaponTwo.weaponType)}
      </Segment>
    );
  }
}
