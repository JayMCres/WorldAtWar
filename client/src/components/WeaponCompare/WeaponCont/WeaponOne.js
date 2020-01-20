import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import TankCompare from "../WeaponTypes/Tanks/TankCompare";
import ShipCompare from "../WeaponTypes/Ships/ShipCompare";
import PlaneDetailsFetch from "../WeaponTypes/Planes/FetchDetailsOne";

import { setWeaponScoreOne } from "../../../actions/weapon";
import { connect } from "react-redux";

class WeaponOne extends Component {
  componentDidMount() {
    this.props.dispatch(setWeaponScoreOne(this.props.weaponOne));
  }
  render() {
    // console.log("WeaponOne Props", this.props);
    const renderWeaponPage = type => {
      const WEAPON_PAGES = {
        tank: (
          <TankCompare
            weapon={this.props.weaponOne}
            removeWeaponsFromCompareItems={
              this.props.removeWeaponsFromCompareItems
            }
            score={this.props.score}
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
          />
        )
      };
      return <div>{WEAPON_PAGES[type]}</div>;
    };
    return (
      <Segment>
        {() => this.props.setBattleScores(this.props.score)}
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
const mapStateToProps = state => ({
  score: state.weapon.scoreOne
});
export default connect(mapStateToProps)(WeaponOne);
