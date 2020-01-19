import React, { Component } from "react";
import { Grid, Image, Segment, Message, Card } from "semantic-ui-react";
import WeaponCard from "../Shared/WeaponCard";
import WeaponHeader from "../Shared/WeaponHeader";
import WeaponTable from "../Shared/WeaponTable";
import WeaponMenu from "../Shared/WeaponMenu";
import TankCombatCont from "./TankCombatCont";

export default class TankeCompare extends Component {
  state = {
    profile: [],
    combat: [],
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
      profile: [this.props.weapon].map(items => {
        return this.reformatDataForTable(items.profile);
      }),
      guns: [this.props.weapon].map(items => {
        return this.reformatDataForTable(items.gun);
      }),
      shells: [this.props.weapon].map(items => {
        return Object.values(items.shells[0]);
      }),
      armor: [this.props.weapon].map(items => {
        return this.reformatDataForTable(items.armor);
      }),
      combat: [this.props.weapon].map(items => {
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
    console.log("TankCompare State", this.state);
    // console.log("Weaponn Props", this.props);
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
    const combatScore = [this.props.weapon].map(items => {
      return items.combat;
    });
    // console.log("weaponary", weaponary);
    return (
      <Segment>
        <Grid columns={3} divided>
          <Grid.Column width={6}>
            <Grid columns={2} divided>
              <Grid.Column centered verticalAlign="middle" width={3}>
                <WeaponHeader
                  icon={this.props.weapon.icon}
                  name={this.props.weapon.name}
                  nation={this.props.weapon.nation}
                  type={this.props.weapon.weapon}
                />
              </Grid.Column>
              <Grid.Column centered width={13}>
                <Card fluid>
                  <Image
                    src={this.props.weapon.card}
                    size="large"
                    wrapped
                    ui={false}
                  />
                </Card>
                {/* <WeaponCard
                  description={this.props.weapon.description}
                  card={this.props.weapon.card}
                  type={this.props.weapon.type}
                /> */}
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column width={10}>
            <Grid.Column width={9}>
              <TankCombatCont
                combat={this.state.combat}
                scoreData={Object.values(...this.state.combat)}
                setScore={this.props.setScore}
              />
            </Grid.Column>
            <Message>{this.props.weapon.description}</Message>
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
        {/* </Grid.Column> */}
        {/* </Grid> */}
      </Segment>
    );
  }
}
