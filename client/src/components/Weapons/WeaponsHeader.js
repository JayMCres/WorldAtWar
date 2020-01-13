import React from "react";
import { Header, Menu, Icon } from "semantic-ui-react";
import Search from "./Search";

const WeaponsHeader = props => (
  <Menu
    style={{
      "background-color": "black"
    }}
  >
    <Menu.Item>
      <Header
        as="h2"
        style={{
          color: "blue"
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
