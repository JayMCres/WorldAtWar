import React from "react";
import { Header, Menu, Icon, Image } from "semantic-ui-react";
import Search from "./Search";
// import "./weapon.css";

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

    {/* <Menu.Item>
      <div class="banner banner6">
        <h1>Energizer</h1>
        <div class="slogan">The Smarter Power</div>
      </div>
    </Menu.Item> */}
    <Menu.Item position="right">
      <Search handleChange={props.handleChange} inputValue={props.inputValue} />
    </Menu.Item>
  </Menu>
);

export default WeaponsHeader;
