import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const BattleCard = props => {
  return (
    <Card fluid>
      <Image src={props.weapon.card} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.weapon.name}</Card.Header>

        {/* <Card.Description>
          {props.weapon.name + " is the Winner"}
        </Card.Description> */}
      </Card.Content>
    </Card>
  );
};

export default BattleCard;
