import React from "react";
import { Header, Menu, Icon, Input } from "semantic-ui-react";

const FavoriteHeader = props => (
  <Menu
    style={{
      "background-color": "#F5F5F5",
      "border-color": "#6666ff",
      "border-style": "solid",
      "border-width": "1px"
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
        <Header.Content>Armory</Header.Content>
      </Header>
    </Menu.Item>
    <Menu.Item position="right">
      <Input
        size="mini"
        icon="search"
        placeholder="Search..."
        onChange={props.handleChange}
        type="text"
        value={props.inputValue}
        name="input"
      />
    </Menu.Item>
  </Menu>
);

export default FavoriteHeader;
