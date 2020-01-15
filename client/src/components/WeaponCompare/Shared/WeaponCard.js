import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const WeaponCard = props => {
  return (
    <Card>
      <Image src={props.card} wrapped ui={false} />
      <Card.Content>
        <Card.Meta>
          <span className="date">{props.type.toUpperCase()}</span>
        </Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default WeaponCard;
