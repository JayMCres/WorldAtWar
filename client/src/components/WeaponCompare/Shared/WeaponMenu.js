import React from "react";
import { Menu } from "semantic-ui-react";

const WeaponMenu = props => (
  <Menu>
    <Menu.Item
      name="profile"
      active={props.activeItem === "profile"}
      onClick={props.handleItemClick}
    >
      Profile
    </Menu.Item>

    <Menu.Item
      name="weapons"
      active={props.activeItem === "weapons"}
      onClick={props.handleItemClick}
    >
      Weapons
    </Menu.Item>

    <Menu.Item
      name="armor"
      active={props.activeItem === "armor"}
      onClick={props.handleItemClick}
    >
      Armor
    </Menu.Item>
  </Menu>
);

export default WeaponMenu;
