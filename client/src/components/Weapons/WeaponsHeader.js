import React from "react";
import { Header, Menu, Icon } from "semantic-ui-react";
import Search from "./Search";

const WeaponsHeader = props => (
  <Menu
    style={{
      "background-color": "#F5F5F5",
      "border-color": "black",
      "border-style": "solid",
      "border-width": "1px"
    }}
  >
    <Menu.Item>
      <Header
        as="h2"
        style={{
          color: "black"
        }}
      >
        <Icon name="plug" />
        <Header.Content>Weapons Systems</Header.Content>
      </Header>
    </Menu.Item>
    <Menu.Item position="right">
      <Search handleChange={props.handleChange} inputValue={props.inputValue} />
    </Menu.Item>
  </Menu>
);

export default WeaponsHeader;
