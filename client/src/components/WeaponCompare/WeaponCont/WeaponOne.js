import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import TankCompare from "../WeaponTypes/TankCompare";
import ShipCompare from "../WeaponTypes/ShipCompare";
import PlaneDetailsFetch from "../WeaponTypes/Planes/FetchDetailsOne";
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
            setScore={this.props.setScore}
          />
        ),
        plane: (
          <PlaneDetailsFetch
            weapon={this.props.weaponOne}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
            setScore={this.props.setScore}
          />
        ),
        ship: (
          <ShipCompare
            weapon={this.props.weaponOne}
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
        <Label as="a" corner="left" color="red">
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
