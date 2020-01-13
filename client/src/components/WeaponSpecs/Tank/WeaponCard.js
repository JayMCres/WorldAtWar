import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const WeaponCard = props => {
  return (
    <Card centered onClick={props.handleShowDetails}>
      <Image src={props.images.normal} wrapped ui={false} />
    </Card>
  );
};

export default WeaponCard;
