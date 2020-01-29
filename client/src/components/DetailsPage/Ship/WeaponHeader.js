import React from "react";
import { Header, Icon, Message } from "semantic-ui-react";

const WeaponHeader = props => (
  <Message color="Teal">
    <Header as="h2" centered>
      <Icon name={props.detailsWeapon.icon} />
      <Header.Content>
        {props.detailsWeapon.name}
        <Header.Subheader>{props.detailsWeapon.weapon}</Header.Subheader>
      </Header.Content>
    </Header>
  </Message>
);

export default WeaponHeader;
