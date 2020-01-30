import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";

import WeaponsCont from "./Weapons/WeaponsCont";
import WeaponSpecCont from "./WeaponSpecs/WeaponSpecCont";
import WeaponComparison from "./WeaponCompare/WeaponComparison";
import FavoritesCont from "./Weapons/Favorites/FavoritesCont";
import BattleCont from "./WeaponCompare/Battle/BattleCont";
import WeaponFormCont from "./WeaponForm/WeaponFormCont";
import DetailsContainer from "./DetailsPage/DetailsContainer";
import LoadingPage from "./LoadingPage";
import WeaponsHeader from "./Weapons/WeaponsHeader";

import { connect } from "react-redux";
import { findWeapon, clearFoundWeapon } from "../actions/weapons";
import { createFavorite, deleteFavorite } from "../actions/favorites";

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
    showForm: false,
    formWeapon: [],
    inputValue: ""
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  addToFavorites = itemId => {
    const userId = this.props.currentUser.id;
    const foundWeapon = this.props.weapons.find(item => item.id === itemId);

    const preventDoubles = this.props.favorites.find(
      item => item.weaponId === itemId
    );

    if (!preventDoubles) {
      this.props.dispatch(createFavorite(foundWeapon, userId));
    }
  };

  removeFromfavorites = favId => {
    const favoriteToDelete = this.props.favorites.find(
      item => item.id === favId
    );
    if (favoriteToDelete) {
      this.props.dispatch(deleteFavorite(favId));
    }
  };

  handleshowComparePage = () => {
    this.setState({
      showComparePage: !this.state.showComparePage,
      detailsWeapon: []
    });
  };
  handleShowBattlePage = () => {
    this.setState({
      showBattlePage: !this.state.showBattlePage,
      showComparePage: false,
      detailsWeapon: []
    });
  };

  handleOpenForm = async itemId => {
    await this.props.dispatch(findWeapon(itemId));
    this.setState({
      formWeapon: this.props.detailsWeapon,
      showForm: !this.state.showForm,
      showBattlePage: false,
      showComparePage: false,
      showDetails: false
    });
  };

  handleCloseForm = async () => {
    await this.props.dispatch(clearFoundWeapon());
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
    await this.props.dispatch(findWeapon(itemId));
    this.setState({
      showBattlePage: false,
      compareItems: [],
      showDetails: true,
      showForm: false
    });
  };

  handleCloseDetails = async () => {
    await this.props.dispatch(clearFoundWeapon());
    this.setState({
      showBattlePage: false,
      compareItems: [],
      showDetails: false,
      showForm: false
    });
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

  render() {
    // console.log("HomePage Props", this.props);
    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <WeaponSpecCont />
        {this.state.showForm === true ? (
          <WeaponFormCont handleCloseForm={this.handleCloseForm} />
        ) : (
          <Segment
            style={{
              "background-color": "#F5F5F5"
            }}
          >
            {this.props.favorites.length === 0 ? (
              <div>
                <WeaponsHeader
                  handleChange={this.handleChange}
                  inputValue={this.state.inputValue}
                />
                <WeaponsCont
                  addWeaponToArmory={this.addToFavorites}
                  favorites={this.state.favorites}
                  addItemToCompare={this.addItemToCompare}
                  addItemToDetails={this.addItemToDetails}
                  handleshowForm={this.handleOpenForm}
                  detailsWeapon={this.state.detailsWeapon}
                  inputValue={this.state.inputValue}
                />
              </div>
            ) : (
              <Grid
                columns={2}
                divided
                style={{
                  "background-color": "#F5F5F5"
                }}
              >
                <Grid.Column width={12}>
                  <WeaponsHeader
                    handleChange={this.handleChange}
                    inputValue={this.state.inputValue}
                  />
                  <WeaponsCont
                    addWeaponToArmory={this.addToFavorites}
                    favorites={this.state.favorites}
                    addItemToCompare={this.addItemToCompare}
                    addItemToDetails={this.addItemToDetails}
                    handleshowForm={this.handleOpenForm}
                    detailsWeapon={this.state.detailsWeapon}
                    inputValue={this.state.inputValue}
                  />
                </Grid.Column>
                <Grid.Column width={4}>
                  <FavoritesCont
                    favorites={this.props.favorites}
                    addItemToCompare={this.addItemToCompare}
                    addItemToDetails={this.addItemToDetails}
                    removeFromfavorites={this.removeFromfavorites}
                  />
                </Grid.Column>
              </Grid>
            )}
          </Segment>
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
          <BattleCont
            compareItems={this.state.compareItems}
            handleShowBattlePage={this.handleShowBattlePage}
          />
        )}

        {this.state.showDetails === false ? null : (
          <Segment
            style={{
              "background-color": "#F5F5F5"
            }}
          >
            {this.props.detailsWeapon.length === 0 ? (
              <LoadingPage />
            ) : (
              <DetailsContainer
                handleCloseDetails={this.handleCloseDetails}
                type={this.props.detailsWeapon.typeID}
              />
            )}
          </Segment>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  weapons: state.weapons.weapons[0],
  detailsWeapon: state.weapons.foundWeapon,
  favorites: state.favorites.favorites
});

export default connect(mapStateToProps)(HomePage);
