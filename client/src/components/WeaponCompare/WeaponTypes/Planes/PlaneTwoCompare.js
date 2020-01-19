import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Segment, Message } from "semantic-ui-react";
import WeaponCard from "../../Shared/WeaponCard";
import WeaponHeader from "../../Shared/WeaponCard";
import WeaponTable from "../../Shared/WeaponTable";
import WeaponMenu from "../../Shared/WeaponMenu";
import PlaneCombatCont from "./PlaneCombatCont";

class PlaneTwoCompare extends Component {
  state = {
    activeItem: "profile"
  };
  handleItemClick = async (e, { name }) => {
    await this.setState({ activeItem: name });
  };

  handleRenderCombatProfile = async () => {
    await this.handleSetCombatProfile();
    return this.state.combat.length > 0 ? (
      <PlaneCombatCont
        scoreData={Object.values(this.props.combat)}
        combat={this.state.combat}
      />
    ) : (
      <Message>Loading</Message>
    );
  };

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

    const weaponsArray = [
      ...Object.values(this.props.allWeapons[0]).map((item, index) => {
        const alternative = "N/A";
        return {
          ["Bomb" + " " + index + 1]:
            item.name_i18n == undefined ? alternative : item.name_i18n,
          ["explosion_radius" + " " + index + 1]:
            item.explosion_radius == undefined
              ? alternative
              : item.explosion_radius,
          ["explosion_damage_max" + " " + index + 1]:
            item.explosion_damage_max === undefined
              ? alternative
              : item.explosion_damage_max,
          ["Bomb Level" + " " + index + 1]:
            item.level === undefined ? alternative : item.level
        };
      }),
      ...Object.values(this.props.allWeapons[1]).map((item, index) => {
        //   console.log(item);
        return {
          ["Gun" + " " + index + 1]:
            item.name_i18n === undefined ? "N/A" : item.name_i18n,
          ["Gun Type" + " " + index + 1]:
            item.type_i18n === undefined ? "N/A" : item.type_i18n,
          ["Gun Level" + " " + index + 1]:
            item.level === undefined ? "N/A" : item.level
        };
      })
    ];

    const weaponsObj = { ...weaponsArray[0], ...weaponsArray[1] };

    const onMainMenuClick = link => {
      const HOME_PAGES = {
        profile:
          this.props.profile[0] === undefined ? (
            <Message>Loading</Message>
          ) : (
            <WeaponTable
              tableData={this.reformatDataForTable([this.props.profile[0]])}
            />
          ),

        weapons: <WeaponTable tableData={weaponsObj} />,
        armor: <Message>No Armor Stats For Planes</Message>
      };
      return <div>{HOME_PAGES[link]}</div>;
    };

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
            {this.props.profile[0] === undefined ? (
              <Message>Loading</Message>
            ) : (
              <PlaneCombatCont
                scoreData={Object.values(this.props.combat)}
                combat={this.reformatDataForTable([this.props.profile[0]])}
              />
            )}
          </Grid.Column>
        </Grid>
        <WeaponMenu
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
          weapons={weaponsArray}
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
  profile: [state.weapon.planeTwo].map(item => {
    return item[1];
  }),

  combat: [state.weapon.planeTwo].map(item => {
    return item[1];
  }),
  bombs: [state.weapon.planeTwo].map((item, index) => item[3]),
  guns: [state.weapon.planeTwo].map(item => {
    return item[6];
  }),
  allWeapons: [state.weapon.planeTwo[6]]
    .concat([state.weapon.planeTwo[3]])
    .map(items => {
      return { ...items };
    }),
  planeObj: [state.weapon.planeTwo[3]].map(item => item)
});

export default connect(mapStateToProps)(PlaneTwoCompare);
