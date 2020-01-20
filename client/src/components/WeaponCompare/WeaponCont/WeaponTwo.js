import React, { Component } from "react";
import { Segment, Icon, Label, Message } from "semantic-ui-react";
import TankCompare from "../WeaponTypes/Tanks/TankCompare";
import ShipCompare from "../WeaponTypes/Ships/ShipCompare";
import PlaneDetailsFetch from "../WeaponTypes/Planes/FetchDetailsTwo";

import { setWeaponScoreTwo } from "../../../actions/weapon";
import { connect } from "react-redux";

class WeaponTwo extends Component {
  async componentDidMount() {
    this.props.dispatch(setWeaponScoreTwo(this.props.weaponTwo));
  }

  render() {
    const renderWeaponPage = type => {
      const WEAPON_PAGES = {
        tank: (
          <TankCompare
            weapon={this.props.weaponTwo}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
            score={this.props.score}
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

const mapStateToProps = state => ({
  score: state.weapon.scoreTwo
});

export default connect(mapStateToProps)(WeaponTwo);
