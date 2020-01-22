import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const WeaponCard = props => {
  // console.log("Weapon Card Props", props);
  const type = props.detailsWeapon.type.slice(0, -4);
  return (
    <Card fluid centered>
      <Image src={props.card} size="big" wrapped ui={false} />
      <Card.Content>
        <Card.Description>
          <strong>
            {type.charAt(0).toUpperCase() + type.slice(1) + " " + "Tank"}-{" "}
            {props.detailsWeapon.nation.toUpperCase()}
          </strong>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default WeaponCard;
