import React, { Component } from "react";
import { Grid, Image, Segment, Message } from "semantic-ui-react";
import WeaponCard from "../Shared/WeaponCard";
import WeaponHeader from "../Shared/WeaponHeader";
import WeaponTable from "../Shared/WeaponTable";
import WeaponMenu from "../Shared/WeaponMenu";
import ShipCombatCont from "./ShipCombatCont";

export default class TankeCompare extends Component {
  state = {
    profile: [],
    combat: [],
    armor: [],
    guns: [],
    torpedos: [],
    antiaircraft: [],
    weapons: [],
    activeItem: "profile"
  };
  handleItemClick = async (e, { name }) => {
    await this.setState({ activeItem: name });
  };
  componentWillMount() {
    this.setState({
      profile: [this.props.weaponOne].map(items => {
        return this.reformatDataForTable(items.profile);
      }),
      guns: [this.props.weaponOne].map(items => {
        return items.artillery;
      }),
      torpedoes: [this.props.weaponOne].map(items => {
        // if (items.torpedoes.length === 0) {
        //   return { Torpedoes: "N/A" };
        // } else {
        return Object.values(items.torpedoes[0]);
      }),
      antiaircraft: [this.props.weaponOne].map(items => {
        console.log(items);
        return Object.values(items.antiaircraft[0]);
      }),
      combat: [this.props.weaponOne].map(items => {
        return this.reformatDataForTable(items.combat);
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
    console.log("Ship Compare State", this.state);
    // console.log("Weapon One Props", this.props);
    const { activeItem } = this.state;
    const weaponaryArray = Object.values(...this.state.guns[0]).concat(
      Object.values(...this.state.antiaircraft).concat(
        Object.values(...this.state.torpedoes)
      )
    );
    const weaponary = weaponaryArray.reduce(
      (obj, item) => Object.assign(obj, { ...item }),
      {}
    );

    console.log("weaponary", weaponary);
    const onMainMenuClick = link => {
      const HOME_PAGES = {
        profile: <WeaponTable tableData={this.state.profile[0]} />,

        weapons: <WeaponTable tableData={weaponary} />,
        armor: <Message>No Armor Stats For Ships</Message>
      };
      return <div>{HOME_PAGES[link]}</div>;
    };
    // const combatScore = [this.props.weaponOne].map(items => {
    //   return items.combat;
    // });

    return (
      <Segment>
        <Grid columns={3} divided>
          <Grid.Column width={4} verticalAlign="middle">
            <WeaponHeader
              icon={this.props.weaponOne.icon}
              name={this.props.weaponOne.name}
              nation={this.props.weaponOne.nation}
              type={this.props.weaponOne.weapon}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <WeaponCard
              description={this.props.weaponOne.description}
              card={this.props.weaponOne.card}
              type={this.props.weaponOne.type}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <ShipCombatCont
              scoreData={Object.values(...this.state.combat)}
              combat={this.state.combat}
            />
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
        {/* </Grid.Column>
        </Grid> */}
      </Segment>
    );
  }
}
