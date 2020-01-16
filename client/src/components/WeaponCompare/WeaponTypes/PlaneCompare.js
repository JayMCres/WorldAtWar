import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Segment, Message } from "semantic-ui-react";
import WeaponCard from "../Shared/WeaponCard";
import WeaponHeader from "../Shared/WeaponHeader";
import WeaponTable from "../Shared/WeaponTable";
import WeaponMenu from "../Shared/WeaponMenu";
import ShipCombatCont from "./ShipCombatCont";

class PlaneCompare extends Component {
  state = {
    profile: [],
    combat: [],
    bombs: [],
    guns: [],
    weapons: [],
    activeItem: "profile"
  };
  handleItemClick = async (e, { name }) => {
    await this.setState({ activeItem: name });
  };
  componentDidMount() {
    this.setState({
      profile: this.reformatDataForTable([this.props.plane[1]]),
      guns: this.props.plane[6].map((items, index) => {
        return this.reformatDataForTable([
          {
            ["Gun" + " " + index + 1]: items.name_i18n,
            ["Gun Type" + " " + index + 1]: items.type_i18n,
            ["Gun Level" + " " + index + 1]: items.level
          }
        ]);
      }),
      bombs: this.props.plane[3].map((items, index) => {
        console.log(items);
        return this.reformatDataForTable([
          {
            ["Bomb" + " " + index + 1]: items.name_i18n,
            ["explosion_radius" + " " + index + 1]: items.explosion_radius,
            ["explosion_damage_max" +
            " " +
            index +
            1]: items.explosion_damage_max,
            ["Bomb Level" + " " + index + 1]: items.level
          }
        ]);
      })
    });
  }

  reformatDataForTable = data => {
    // console.log("Data", data);
    const labels = Object.keys(data[0]);

    const reformatedLabels = labels.map((label, index) => {
      const splitLabel = label.split("_");
      const upperCase = splitLabel.map((item, index) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
      });
      const newLabel = upperCase.join(" ");

      return newLabel;
    });

    const reformatedValues = [...Object.values(data[0])];
    const keys = reformatedLabels;

    let newObject = reformatedValues.reduce((result, field, index) => {
      result[keys[index]] = field;
      return result;
    }, {});
    return newObject;
    // console.log("Labels", newObject);
  };

  render() {
    // console.log("Plane Compare Props", this.props);
    // console.log("Plane Compare State", this.state);
    const { activeItem } = this.state;

    const weapons = [...this.state.guns, ...this.state.bombs];
    const weaponsObj = { ...weapons[0], ...weapons[1] };

    const onMainMenuClick = link => {
      const HOME_PAGES = {
        profile: <WeaponTable tableData={this.state.profile} />,

        weapons: <WeaponTable tableData={weaponsObj} />,
        armor: <Message>No Armor Stats For Planes</Message>
      };
      return <div>{HOME_PAGES[link]}</div>;
    };
    // const combatScore = [this.props.weaponOne].map(items => {
    //   return items.combat;
    // });

    return (
      <Segment>
        <Grid columns={3} divided>
          <Grid.Column width={4}>
            <WeaponCard
              description={this.props.weapon.description}
              card={this.props.weapon.card}
              type={this.props.weapon.type}
            />
          </Grid.Column>
          <Grid.Column width={4} verticalAlign="middle">
            <WeaponHeader
              icon={this.props.weapon.icon}
              name={this.props.weapon.name}
              nation={this.props.weapon.nation}
              type={this.props.weapon.weapon}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            {/* <ShipCombatCont
              scoreData={Object.values(...this.state.combat)}
              combat={this.state.combat}
            /> */}
          </Grid.Column>
        </Grid>
        <WeaponMenu
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
        />
        <Segment
          style={{
            overflow: "auto",
            maxHeight: 250,
            minHeight: 250
          }}
        >
          {onMainMenuClick(activeItem)}
        </Segment>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  plane: [
    ...Object.values(state.weapon.plane[0]),
    ...Object.values(state.weapon.plane[1])
  ],
  planeOne: state.weapon.plane
});

export default connect(mapStateToProps)(PlaneCompare);
