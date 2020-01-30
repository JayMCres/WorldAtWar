import React from "react";
import { Header, Icon, Label } from "semantic-ui-react";

const WeaponCont = props => {
  return (
    <Header
      as="h2"
      attached="top"
      style={{
        maxHeight: 80,
        minHeight: 80
        // "background-color": "#8391a5"
      }}
    >
      <Icon name="ship" />
      <Header.Content>
        {props.name}
        <Header.Subheader>
          <strong style={{ "font-size": "12px" }}>
            {props.type.toUpperCase()}
          </strong>
        </Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default WeaponCont;
