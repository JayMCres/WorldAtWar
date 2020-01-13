import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const WeaponCard = props => {
  return (
    <Card centered onClick={props.handleShowDetails}>
      <Image src={props.images.large} wrapped ui={false} />
      {/* <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta> */}
      {/* <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description> */}
      {/* </Card.Content> */}
    </Card>
  );
};

export default WeaponCard;
