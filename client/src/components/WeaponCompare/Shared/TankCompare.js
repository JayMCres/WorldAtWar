import React, { Component } from "react";
import { Grid, Image, Segment, Message } from "semantic-ui-react";
import WeaponCard from "./WeaponCard";
import WeaponHeader from "./WeaponHeader";
import WeaponTable from "./WeaponTable";
import WeaponMenu from "../Shared/WeaponMenu";

export default class TankeCompare extends Component {
  state = {
    profile: [],
    weapons: [],
    armor: [],
    guns: [],
    shells: [],
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
        return this.reformatDataForTable(items.gun);
      }),
      shells: [this.props.weaponOne].map(items => {
        return Object.values(items.shells[0]);
      }),
      armor: [this.props.weaponOne].map(items => {
        return this.reformatDataForTable(items.armor);
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
    console.log("TankCompare State", this.state);
    // console.log("Weapon One Props", this.props);
    const { activeItem } = this.state;
    const weaponaryArray = [...this.state.guns, ...this.state.shells[0]];
    const weaponary = {
      ...weaponaryArray[0],
      ...weaponaryArray[1],
      ...weaponaryArray[2],
      ...weaponaryArray[3]
    };
    const onMainMenuClick = link => {
      const HOME_PAGES = {
        profile: <WeaponTable tableData={this.state.profile[0]} />,
        weapons: <WeaponTable tableData={weaponary} />,
        armor: <WeaponTable tableData={this.state.armor[0]} />
      };
      return <div>{HOME_PAGES[link]}</div>;
    };

    // console.log("weaponary", weaponary);
    return (
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={3}>
            <WeaponCard
              description={this.props.weaponOne.description}
              card={this.props.weaponOne.card}
              type={this.props.weaponOne.type}
            />
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid columns={2} divided>
              <Grid.Column width={4}>
                <WeaponHeader
                  icon={this.props.weaponOne.icon}
                  name={this.props.weaponOne.name}
                  nation={this.props.weaponOne.nation}
                  type={this.props.weaponOne.weapon}
                />
              </Grid.Column>
              <Grid.Column width={12}>test</Grid.Column>
            </Grid>
            <WeaponMenu
              activeItem={this.state.activeItem}
              handleItemClick={this.handleItemClick}
            />
            {onMainMenuClick(activeItem)}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
