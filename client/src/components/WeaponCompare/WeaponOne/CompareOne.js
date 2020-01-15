import React, { Component } from "react";
import { Grid, Image, Segment, Header, Icon } from "semantic-ui-react";
import TankCompare from "../Shared/TankCompare";

export default class CompareOne extends Component {
  render() {
    // console.log("Compare One State", this.state);
    console.log("Compare One Props", this.props);
    const renderWeaponPage = type => {
      const WEAPON_PAGES = {
        tank: <TankCompare weaponOne={this.props.weaponOne} />,
        plane: <div>plane</div>,
        ship: <div>ship</div>
      };
      return <div>{WEAPON_PAGES[type]}</div>;
    };
    return (
      <Segment>
        {renderWeaponPage(this.props.weaponOne.weaponType)}
        {/* <WeaponOne
          profile={this.state.profile}
          weapon={this.props.weapon}
          weaponsData={[...this.state.guns, ...this.state.shells]}
          armor={this.state.armor}
        /> */}
      </Segment>
    );
  }
}
