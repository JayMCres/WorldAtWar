import React, { Component } from "react";
import { Segment, Icon, Label, Message } from "semantic-ui-react";
import TankCompare from "../WeaponTypes/TankCompare";
import ShipCompare from "../WeaponTypes/ShipCompare";
import PlaneDetailsFetch from "../WeaponTypes/Planes/FetchDetailsTwo";
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
            setScore={this.props.setScore}
          />
        ),
        plane: (
          <PlaneDetailsFetch
            weapon={this.props.weaponTwo}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
            setScore={this.props.setScore}
          />
        ),
        ship: (
          <ShipCompare
            weapon={this.props.weaponTwo}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
            setScore={this.props.setScore}
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
