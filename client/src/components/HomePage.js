import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";

import WeaponsCont from "./Weapons/WeaponsCont";
import WeaponSpecCont from "./WeaponSpecs/WeaponSpecCont";
import CompareCont from "./WeaponCompare/CompareCont";
import FavoritesCont from "./Weapons/Favorites/FavoritesCont";

import { connect } from "react-redux";
class HomePage extends Component {
  state = {
    compareItems: [],
    favorites: [],
    showComparePage: false,
    showDetails: false,
    detailsWeapon: []
  };

  handleshowComparePage = () => {
    this.setState({
      showComparePage: !this.state.showComparePage,
      showDetails: false
    });
  };

  handleshowComparePage = () => {
    this.setState({
      showComparePage: false,
      showDetails: !this.state.showDetails,
      compareItems: [],
      detailsWeapon: []
    });
  };
  addItemToDetails = async itemId => {
    // console.log("firing", )

    const foundWeapon = this.props.weapons[0].find(item => {
      return item.id === itemId;
    });

    // console.log("foundCompare", foundCompare);

    if (this.state.detailsWeapon.length === 0) {
      this.setState({
        showComparePage: false,
        showDetails: true,
        compareItems: [],
        detailsWeapon: foundWeapon
      });
    } else {
      this.setState({
        showComparePage: false,
        showDetails: true,
        compareItems: [],
        detailsWeapon: [],
        detailsWeapon: foundWeapon
      });
    }
  };
  addItemToCompare = async itemId => {
    // console.log("firing", )

    const foundCompare = this.props.weapons[0].find(item => {
      return item.id === itemId;
    });

    // console.log("foundCompare", foundCompare);
    const preventDoubles = this.state.compareItems.find(item => {
      return item.id === foundCompare.id;
    });
    if (!preventDoubles) {
      if (this.state.compareItems.length === 0) {
        this.setState({
          compareItems: [...this.state.compareItems, foundCompare],
          showComparePage: true,
          showDetails: false,
          detailsWeapon: []
        });
      } else if (
        this.state.compareItems.length === 1 &&
        this.state.compareItems[0].weaponType === foundCompare.weaponType
      ) {
        this.setState({
          compareItems: [...this.state.compareItems, foundCompare],
          showComparePage: true,
          showDetails: false,
          detailsWeapon: []
        });
      } else if (
        this.state.compareItems.length === 1 &&
        this.state.compareItems[0].weaponType !== foundCompare.weaponType
      ) {
        alert("You can only compare weapons of the same type");
      } else {
        alert("You Can Only Compare Two Items");
      }
    }
  };

  addWeaponToArmory = weapon => {
    // console.log(weapon);
    this.setState({
      favorites: [...this.state.favorites, weapon]
    });
  };
  render() {
    console.log("MainPage", this.state);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <WeaponSpecCont />
        <Grid
          columns={2}
          divided
          style={{
            "background-color": "black"
          }}
        >
          <Grid.Column width={11}>
            <WeaponsCont
              addWeaponToArmory={this.addWeaponToArmory}
              favorites={this.state.favorites}
              addItemToCompare={this.addItemToCompare}
              addItemToDetails={this.addItemToDetails}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <FavoritesCont
              favorites={this.state.favorites}
              addItemToCompare={this.addItemToCompare}
              addItemToDetails={this.addItemToDetails}
            />
          </Grid.Column>
        </Grid>
        {this.state.compareItems.length === 0 ||
        this.state.showComparePage === false ? null : (
          <CompareCont compareItems={this.state.compareItems} />
        )}
        {this.state.detailsWeapon.length === 0 ||
        this.state.showDetails === false ? null : (
          <Message>test</Message>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  weapons: state.weapons.weapons
});

export default connect(mapStateToProps)(HomePage);
