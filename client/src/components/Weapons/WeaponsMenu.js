import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const WeaponsMenu = props => {
  return (
    <Menu
      compact
      icon="labeled"
      vertical
      size="mini"
      inverted
      style={{
        "background-color": "black"
      }}
    >
      <Menu.Item
        style={{
          "border-color": "#6666ff",
          "border-style": "solid",
          "border-width": "1px"
        }}
        name="tanks"
        active={props.activeItem === "tanks"}
        onClick={props.handleItemClick}
      >
        <Icon name="area chart" size="tiny" />
        Tanks
      </Menu.Item>
      <Menu.Item
        style={{
          "border-color": "#6666ff",
          "border-style": "solid",
          "border-width": "1px"
        }}
        name="planes"
        active={props.activeItem === "planes"}
        onClick={props.handleItemClick}
      >
        <Icon name="th list" size="tiny" /> Planes
      </Menu.Item>

      <Menu.Item
        style={{
          "border-color": "#6666ff",
          "border-style": "solid",
          "border-width": "1px"
        }}
        name="ships"
        active={props.activeItem === "ships"}
        onClick={props.handleItemClick}
      >
        <Icon name="bitcoin" size="tiny" /> Ships
      </Menu.Item>
    </Menu>
  );
};

export default WeaponsMenu;
