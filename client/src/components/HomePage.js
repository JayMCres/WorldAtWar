import React, { Component } from "react";

import { Segment, Grid, Message } from "semantic-ui-react";

import WeaponsCont from "./Weapons/WeaponsCont";
import WeaponSpecCont from "./WeaponSpecs/WeaponSpecCont";
import WeaponComparison from "./WeaponCompare/WeaponComparison";
import FavoritesCont from "./Weapons/Favorites/FavoritesCont";
import WinnerCont from "./WeaponCompare/WinnerCont";
import WeaponFormCont from "./WeaponForm/WeaponFormCont";

import { connect } from "react-redux";
class HomePage extends Component {
  state = {
    compareItems: [],
    favorites: [],
    showComparePage: false,
    showDetails: false,
    detailsWeapon: [],
    showWinnerPage: false,
    scores: [],
    scoreTwo: [],
    itemWinner: null,
    showForm: false
  };

  setScore = score => {
    if (this.state.scores.length === 0) {
      this.setState({ scores: score });
    }
    if (this.state.scores.length === 1) {
      this.setState({ scores: [...this.state.scores, score] });
      this.letsBattle();
    }
  };

  letsBattle = () => {
    if (this.state.compareItems.length === 2) {
      if (this.state.scores[0] > this.state.scores[1]) {
        return this.setState({
          itemWinner: this.state.compareItems[0]
        });

        //    alert(this.state.compareItems[0].name + " " + "Wins")
      } else if (this.state.scores[0] < this.state.scores[1]) {
        return this.setState({
          itemWinner: this.state.compareItems[1]
        });
      } else if (this.state.scores[0] === this.state.scores[1]) {
        alert("The Battle has Resulted in a Tie");
      } else {
        return this.setState({
          itemWinner: null
        });
      }
    }
  };

  handleshowComparePage = () => {
    this.setState({
      showComparePage: !this.state.showComparePage,
      showDetails: false
    });
  };
  handleshowWinnerPage = () => {
    this.setState({
      showWinnerPage: !this.state.showWinPage,
      showComparePage: false,
      showDetails: false
    });
  };

  handleOpenForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  handleCloseForm = () => {
    this.setState({
      detailsWeapon: [],
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
    console.log("foundWeapon", foundWeapon);

    // if (foundWeapon) {
    //   fetch("http://localhost:5000/api/weapons")
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(weapon => {
    //       return this.setState({
    //         detailsWeapon: weapon
    //       });
    //     });
    // } else {
    //   this.setState({
    //     detailsWeapon: foundWeapon
    //   });
    // }
    // console.log("foundWeapon", foundWeapon);

    console.log("foundCompare", this.state.detailsWeapon.length);
  };

  addItemToCompare = async itemId => {
    console.log("firing", itemId);

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
    console.log("MainPage", this.state);
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <WeaponSpecCont />
        {this.state.showForm === true ? (
          <WeaponFormCont
            handleCloseForm={this.handleCloseForm}
            detailsWeapon={this.state.detailsWeapon}
          />
        ) : (
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
          />
        )}
        {this.state.showWinnerPage === false ? null : (
          <WinnerCont scores={this.state.scores} />
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
  weapons: state.weapons.weapons[0]
});

export default connect(mapStateToProps)(HomePage);
