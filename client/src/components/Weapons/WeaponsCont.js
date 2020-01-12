import React, { Component } from "react";
import { fetchTanks, fetchPlanes, fetchShips } from "../../actions/weapons";
import { Segment, Grid, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import WeaponsMenu from "./WeaponsMenu";
import PlanesCont from "./Planes/PlanesCont";
import TanksCont from "./Tanks/TanksCont";
import ShipsCont from "./Ships/ShipsCont";

class WeaponsCont extends Component {
  state = { activeItem: "tanks" };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, chartsPage: "true" });

  async componentDidMount() {
    this.props.dispatch(fetchTanks());
    this.props.dispatch(fetchPlanes());
    this.props.dispatch(fetchShips());
  }
  render() {
    // console.log("MainPage", this.props);
    const { activeItem } = this.state;
    const onMenuClick = link => {
      const WEAPONS_PAGES = {
        tanks: <TanksCont />,
        planes: <PlanesCont />,
        ships: <ShipsCont />
      };
      return <div>{WEAPONS_PAGES[link]}</div>;
    };
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <Header
          as="h2"
          style={{
            color: "blue"
          }}
        >
          <Icon name="plug" />
          <Header.Content>Weapons Systems</Header.Content>
        </Header>
        <Grid>
          <Grid.Column width={1} verticalAlign="middle">
            <WeaponsMenu
              activeItem={activeItem}
              handleItemClick={this.handleItemClick}
            />
          </Grid.Column>
          <Grid.Column
            width={15}
            style={{
              "background-color": "black"
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
