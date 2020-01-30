import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const WeaponCard = props => {
  // console.log("Weapon Card Props", props);

  return (
    <Card fluid centered>
      <Image src={props.card} size="big" wrapped ui={false} />
      <Card.Content>
        <Card.Description>
          <strong>
            {props.detailsWeapon.type}-{" "}
            {props.detailsWeapon.nation.toUpperCase()}
          </strong>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default WeaponCard;