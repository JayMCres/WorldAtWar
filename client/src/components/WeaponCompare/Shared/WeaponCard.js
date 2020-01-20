import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const WeaponCard = props => {
  return (
    <Card fluid>
      <Image src={props.card} size="medium" wrapped ui={false} />
    </Card>
  );
};

export default WeaponCard;
