import React, { Component } from "react";
import { Grid, Image, Segment, Message } from "semantic-ui-react";
import WeaponCard from "../Shared/WeaponCard";
import WeaponHeader from "../Shared/WeaponHeader";
import WeaponMenu from "../Shared/WeaponMenu";
import WeaponTable from "../Shared/WeaponTable";

export default class WeaponOne extends Component {
  state = { activeItem: "profile", tableData: [] };

  handleItemClick = async (e, { name }) => {
    // console.log("tabling", name);
    await this.setState({ activeItem: name, tableData: [] });
    await this.onMenuClick(name);
    await this.renderTable();
  };
  renderTable = () => {
    return this.state.tableData.length === 0 ? (
      <WeaponTable tableData={this.props.profile[0]} />
    ) : (
      <WeaponTable tableData={this.state.tableData[0]} />
    );
  };
  onMenuClick = async link => {
    console.log("Table Data", this.state.tableData);
    this.setState({ tableData: [] });
    const WEAPON_STATE = {
      profile: <WeaponTable tableData={this.props.profile[0]} />,
      weapons: this.setState({
        tableData: [
          this.props.weaponsData[0],
          ...Object.values(this.props.weaponsData[1])
        ],
        armor: <WeaponTable tableData={this.props.armor} />
      })
    };
    return <div>{WEAPON_STATE[link]}</div>;
  };
  render() {
    console.log("Weapon One Props", this.props);
    // const tableItems = Object.entries(this.state.tableData[0]);
    // console.log("tableItems", tableItems);
    return (
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={4}>
            <WeaponCard
              description={this.props.weapon.description}
              card={this.props.weapon.card}
              type={this.props.weapon.type}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <WeaponHeader
              icon={this.props.weapon.icon}
              name={this.props.weapon.name}
              nation={this.props.weapon.nation}
            />
            <WeaponMenu
              activeItem={this.state.activeItem}
              handleItemClick={this.handleItemClick}
            />
            {/* {this.renderTable()} */}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
