import React from "react";
import { Menu, Header, Icon } from "semantic-ui-react";

const WeaponMenu = props => (
  <Menu
    pointing
    secondary
    inverted
    size="mini"
    fluid
    widths={6}
    // style={{
    //   "background-color": "black"
    // }}
  >
    <Menu.Item onClick={() => props.handleShowProfile()}>
      <Header as="h2" style={{ color: "black" }}>
        <Icon name="bity" />
        Weapon Profile
      </Header>
    </Menu.Item>
  </Menu>
);

export default WeaponMenu;
