import React, { Component } from "react";
import { Menu, Table, Segment } from "semantic-ui-react";

export default class TankTable extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => {
    console.log("tabling", name);
    this.setState({ activeItem: name });
    // this.switchFunc(name);
  };

  renderToggle = () => {
    if (this.state.activeItem === "weapons") {
      return this.renderWeapons();
    }
    if (this.state.activeItem === "armor") {
      return this.renderArmor();
    }
    if (this.state.activeItem === "combat") {
      return this.rendeWarProfile();
    } else {
      return this.renderProfile();
    }
  };

  renderWeapons = () => {
    return this.props.profile.map(item => {
      return (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>{item.gun.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Caliber</Table.Cell>
              <Table.Cell>{item.gun.caliber}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Fire Rate</Table.Cell>
              <Table.Cell>{item.gun.fire_rate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Clip Capacity</Table.Cell>
              <Table.Cell>{item.gun.clip_capacity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Clip Reload Time</Table.Cell>
              <Table.Cell>{item.gun.reload_time}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Traverse Speed</Table.Cell>
              <Table.Cell>{item.gun.traverse_speed}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Max Ammo</Table.Cell>
              <Table.Cell>{item.max_ammo}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Aim Time</Table.Cell>
              <Table.Cell>{item.gun.aim_time}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    });
  };

  renderArmor = () => {
    return this.props.profile.map(item => {
      return (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Hull Front Armor</Table.Cell>
              <Table.Cell>{item.armor.hull.front}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hull Back Armor</Table.Cell>
              <Table.Cell>{item.armor.hull.rear}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hull sides Armor</Table.Cell>
              <Table.Cell>{item.armor.hull.sides}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    });
  };
  rendeWarProfile = () => {
    // prettier-ignore
    const weight = (1/7);
    const weights = [weight, weight, weight, weight, weight, weight, weight];
    // prettier-ignore
    const totalScore = this.props.profile.map(item => {
      return (
        ((item.firepower * weights[0]) +
          (item.battle_level_range_max * weights[1]) +
          (item.maneuverability * weights[2]) +
          (item.max_ammo * weights[3]) +
          (item.speed_forward * weights[4]) +
          (item.protection * weights[5]) +
          (item.shot_efficiency * weights[6])) / weights.length);
    });
    return this.props.profile.map(item => {
      return (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Fire Power</Table.Cell>
              <Table.Cell>{item.firepower}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Range</Table.Cell>
              <Table.Cell>{item.battle_level_range_max}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Maneuverability</Table.Cell>
              <Table.Cell>{item.maneuverability}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ammo</Table.Cell>
              <Table.Cell>{item.max_ammo}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Speed</Table.Cell>
              <Table.Cell>{item.speed_forward}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Protection</Table.Cell>
              <Table.Cell>{item.protection}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Shot Efficiency</Table.Cell>
              <Table.Cell>{item.shot_efficiency}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>TOTAL SCORE</Table.Cell>
              <Table.Cell>{totalScore}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    });
  };

  renderProfile = () => {
    return this.props.profile.map(item => {
      return (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Maneuverability</Table.Cell>
              <Table.Cell>{item.maneuverability}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Speed Forwards</Table.Cell>
              <Table.Cell>{item.speed_forward}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Speed Backwards</Table.Cell>
              <Table.Cell>{item.speed_backward}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Weight</Table.Cell>
              <Table.Cell>{item.weight}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Suspension</Table.Cell>
              <Table.Cell>{item.suspension.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Engine</Table.Cell>
              <Table.Cell>{item.engine.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Turret</Table.Cell>
              <Table.Cell>{item.turret.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Horse Power</Table.Cell>
              <Table.Cell>{item.hp}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    });
  };

  render() {
    const { activeItem } = this.state;

    console.log("Tank Table", this.props, this.state);

    return (
      <div>
        <Menu>
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          >
            Profile
          </Menu.Item>

          <Menu.Item
            name="weapons"
            active={activeItem === "weapons"}
            onClick={this.handleItemClick}
          >
            Weapons
          </Menu.Item>

          <Menu.Item
            name="armor"
            active={activeItem === "armor"}
            onClick={this.handleItemClick}
          >
            Armor
          </Menu.Item>
          <Menu.Item
            name="combat"
            active={activeItem === "combat"}
            onClick={this.handleItemClick}
          >
            Combat Score
          </Menu.Item>
        </Menu>

        <Segment>{this.renderToggle()}</Segment>
      </div>
    );
  }
}
