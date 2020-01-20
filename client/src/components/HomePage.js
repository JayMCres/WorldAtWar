import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";

import WeaponsCont from "./Weapons/WeaponsCont";
import WeaponSpecCont from "./WeaponSpecs/WeaponSpecCont";
import WeaponComparison from "./WeaponCompare/WeaponComparison";
import FavoritesCont from "./Weapons/Favorites/FavoritesCont";
import BattleCont from "./WeaponCompare/BattleCont";
import WeaponFormCont from "./WeaponForm/WeaponForm";
import DetailsContainer from "./DetailsPage/DetailsContainer";

import { connect } from "react-redux";
class HomePage extends Component {
  state = {
    compareItems: [],
    favorites: [],
    showComparePage: false,
    showDetails: false,
    detailsWeapon: [],
    showBattlePage: false,
    scores: [],
    scoreTwo: [],
    // itemWinner: null,
    showForm: false,
    formWeapon: []
  };

  handleshowComparePage = () => {
    this.setState({
      showComparePage: !this.state.showComparePage,
      detailsWeapon: []
    });
  };
  handleShowBattlePage = () => {
    this.setState({
      showBattlePage: true,
      showComparePage: false,
      detailsWeapon: []
    });
  };

  handleOpenForm = itemId => {
    const foundWeapon = this.props.weapons.find(item => {
      return item.id === itemId;
    });

    this.setState({
      formWeapon: foundWeapon,
      showForm: !this.state.showForm
    });
  };

  handleCloseForm = () => {
    this.setState({
      formWeapon: [],
      showForm: false
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

    const foundWeapon = this.props.weapons.find(item => {
      return item.id === itemId;
    });
    // console.log("foundWeapon", foundWeapon);

    if (foundWeapon) {
      fetch(`http://localhost:5000/api/weapons/${foundWeapon.id}`)
        .then(response => {
          return response.json();
        })
        .then(weapon => {
          console.log("weaponResponse", weapon);
          if (weapon === null) {
            this.setState({
              detailsWeapon: [],
              detailsWeapon: [foundWeapon]
              // showDetails: !this.state.showDetails
            });
          } else {
            const reformatedWeapon = [weapon]
              .concat([foundWeapon])
              .map(item => {
                return item;
              });
            return this.setState({
              detailsWeapon: [],
              detailsWeapon: [
                { ...reformatedWeapon[0], ...reformatedWeapon[1] }
              ]
              // showDetails: !this.state.showDetails
            });
          }
        });
    } else {
      alert("No Weapon Found");
    }
  };

  addItemToCompare = async itemId => {
    // console.log("firing", itemId);

    const foundCompare = this.props.weapons.find(item => {
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

  removeWeaponsFromCompareItems = itemId => {
    // console.log("firing")
    const weaponToDelete = this.state.compareItems.find(
      item => item.id === itemId
    );
    this.setState({
      compareItems: this.state.compareItems.filter(item => {
        return item !== weaponToDelete;
      })
    });
  };

  addWeaponToArmory = weapon => {
    // console.log(weapon);
    this.setState({
      favorites: [...this.state.favorites, weapon]
    });
  };
  render() {
    // console.log("MainPage", this.state);
    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <WeaponSpecCont />
        {this.state.showForm === true ? (
          <WeaponFormCont
            handleCloseForm={this.handleCloseForm}
            detailsWeapon={this.state.formWeapon}
          />
        ) : (
          <Grid
            columns={2}
            divided
            style={{
              "background-color": "#F5F5F5"
            }}
          >
            <Grid.Column width={11}>
              <WeaponsCont
                addWeaponToArmory={this.addWeaponToArmory}
                favorites={this.state.favorites}
                addItemToCompare={this.addItemToCompare}
                addItemToDetails={this.addItemToDetails}
                handleshowForm={this.handleOpenForm}
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
        )}
        {this.state.compareItems.length === 0 ||
        this.state.showComparePage === false ? null : (
          <WeaponComparison
            compareItems={this.state.compareItems}
            removeWeaponsFromCompareItems={this.removeWeaponsFromCompareItems}
            handleshowWinnerPage={this.handleshowWinnerPage}
            setScore={this.setScore}
            handleShowBattlePage={this.handleShowBattlePage}
          />
        )}
        {this.state.showBattlePage === false ? null : (
          <BattleCont compareItems={this.state.compareItems} />
        )}

        {this.state.detailsWeapon.length === 0 ? null : (
          <DetailsContainer detailsWeapon={this.state.detailsWeapon} />
        )}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  weapons: state.weapons.weapons[0]
});

export default connect(mapStateToProps)(HomePage);
