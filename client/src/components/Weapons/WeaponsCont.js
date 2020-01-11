import React, { Component } from "react";
import { fetchTanks } from "../../actions/weapons";
import { Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import TanksCont from "./Tanks/TanksCont";
import WeaponsMenu from "./WeaponsMenu";

class WeaponsCont extends Component {
  state = { activeItem: "tanks" };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, chartsPage: "true" });

  async componentDidMount() {
    this.props.dispatch(fetchTanks());
  }
  render() {
    // console.log("MainPage", this.props);
    const { activeItem } = this.state;
    const onMenuClick = link => {
      const WEAPONS_PAGES = {
        tanks: <TanksCont />,
        planes: <div>Test</div>,
        ships: <div>Test</div>
      };
      return <div>{WEAPONS_PAGES[link]}</div>;
    };
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <Grid>
          <Grid.Column width={1}>
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
