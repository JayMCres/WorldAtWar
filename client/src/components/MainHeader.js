import React from "react";
import { Header, Menu, Icon } from "semantic-ui-react";

const MainHeader = () => (
  <Menu
    pointing
    secondary
    inverted
    size="mini"
    fluid

    // style={{
    //   "background-color": "black"
    // }}
  >
    <Menu.Item>
      <Header as="h2" style={{ color: "black" }}>
        <Icon name="bity" />
        WORLD AT WAR
      </Header>
    </Menu.Item>
  </Menu>
);

export default MainHeader;
