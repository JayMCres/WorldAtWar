import React from "react";
import { Header, Icon } from "semantic-ui-react";

const WeaponHeader = props => (
  <Header as="h2">
    <Icon name={props.icon} />
    <Header.Content>
      {props.name}
      <Header.Subheader>
        {props.nation.toUpperCase()}-{props.type}
      </Header.Subheader>
    </Header.Content>
  </Header>
);

export default WeaponHeader;
