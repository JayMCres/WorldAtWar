import React from "react";
import { Header, Icon } from "semantic-ui-react";

const WeaponHeader = props => (
  <Header as="h2" icon textAlign="center">
    <Icon name={props.icon} size="small" textAlign="center" />
    {props.name}
    <Header.Subheader>{props.nation.toUpperCase()}</Header.Subheader>
    <Header.Subheader>{props.type}</Header.Subheader>
  </Header>
);

export default WeaponHeader;
