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
        // style={{
        //   "border-color": "#6666ff",
        //   "border-style": "solid",
        //   "border-width": ".5px"
        // }}
        name="tanks"
        active={props.activeItem === "tanks"}
        onClick={props.handleItemClick}
      >
        <Icon name="chess board" size="tiny" />
        Tanks
      </Menu.Item>
      <Menu.Item
        // style={{
        //   "border-color": "#6666ff",
        //   "border-style": "solid",
        //   "border-width": "1px"
        // }}
        name="planes"
        active={props.activeItem === "planes"}
        onClick={props.handleItemClick}
      >
        <Icon name="plane" size="tiny" /> Planes
      </Menu.Item>

      <Menu.Item
        // style={{
        //   "border-color": "#6666ff",
        //   "border-style": "solid",
        //   "border-width": "1px"
        // }}
        name="ships"
        active={props.activeItem === "ships"}
        onClick={props.handleItemClick}
      >
        <Icon name="ship" size="tiny" /> Ships
      </Menu.Item>
    </Menu>
  );
};

export default WeaponsMenu;
