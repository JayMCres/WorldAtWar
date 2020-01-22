import React, { Component } from "react";
// import { fetchTanks, fetchPlanes, fetchShips } from "../../actions/weapons";
import { Segment, Grid, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import WeaponsMenu from "./WeaponsMenu";
import PlanesCont from "./Planes/PlanesCont";
import TanksCont from "./Tanks/TanksCont";
import ShipsCont from "./Ships/ShipsCont";
import WeaponsHeader from "./WeaponsHeader";

class WeaponsCont extends Component {
  state = { activeItem: "tanks", inputValue: "", favorites: [] };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, chartsPage: "true" });

  render() {
    // console.log("MainPage", this.props);
    const { activeItem } = this.state;
    const onMenuClick = link => {
      const WEAPONS_PAGES = {
        tanks: (
          <TanksCont
            inputValue={this.state.inputValue}
            addWeaponToArmory={this.props.addWeaponToArmory}
            favorites={this.props.favorites}
            addItemToCompare={this.props.addItemToCompare}
            addItemToDetails={this.props.addItemToDetails}
            handleshowForm={this.props.handleshowForm}
            detailsWeapon={this.props.detailsWeapon}
          />
        ),
        planes: (
          <PlanesCont
            inputValue={this.state.inputValue}
            addWeaponToArmory={this.props.addWeaponToArmory}
            favorites={this.props.favorites}
            addItemToCompare={this.props.addItemToCompare}
            addItemToDetails={this.props.addItemToDetails}
            handleshowForm={this.props.handleshowForm}
            detailsWeapon={this.props.detailsWeapon}
          />
        ),
        ships: (
          <ShipsCont
            inputValue={this.state.inputValue}
            addWeaponToArmory={this.props.addWeaponToArmory}
            favorites={this.props.favorites}
            addItemToCompare={this.props.addItemToCompare}
            addItemToDetails={this.props.addItemToDetails}
            handleshowForm={this.props.handleshowForm}
          />
        )
      };
      return <div>{WEAPONS_PAGES[link]}</div>;
    };
    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <WeaponsHeader
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        <Grid>
          <Grid.Column width={1} centered verticalAlign="middle">
            <WeaponsMenu
              activeItem={activeItem}
              handleItemClick={this.handleItemClick}
            />
          </Grid.Column>
          <Grid.Column
            width={15}
            style={{
              "background-color": "#F5F5F5"
            }}
          >
            <div>{onMenuClick(activeItem)}</div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default connect(null)(WeaponsCont);
