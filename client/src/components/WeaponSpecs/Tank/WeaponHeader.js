import React from "react";
import { Header, Icon, Label, Image } from "semantic-ui-react";
const icon =
  "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/64x64/plain/tank.png";

const WeaponCont = props => {
  return (
    <Header
      as="h2"
      attached="top"
      style={{
        maxHeight: 80,
        minHeight: 80
      }}
    >
      <Image rounded src={icon} />
      <Header.Content>
        {props.name}
        <Header.Subheader>
          {props.type.length > 6 ? (
            <strong style={{ "font-size": "12px" }}>
              {props.type.toUpperCase().slice(0, -4) + " " + "TANK"}
            </strong>
          ) : (
            <strong style={{ "font-size": "12px" }}>
              {props.type.toUpperCase()}
            </strong>
          )}
        </Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default WeaponCont;
