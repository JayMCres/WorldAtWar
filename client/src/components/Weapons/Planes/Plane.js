import React from "react";
import { Card, Image, Item, Button } from "semantic-ui-react";

const Plane = props => {
  console.log("Plane Props", props);
  // const tank = Object.values(props);
  // console.log("Tank Obj", tank);

  return (
    <Card>
      <Card.Content>
        <Image floated="right" src={props.images.small} />
        <Card.Header style={{ "font-size": "15px" }}>
          {props.name_i18n}
        </Card.Header>
        <Card.Meta>{props.type.toUpperCase()}</Card.Meta>
        <Card.Meta>{props.nation.toUpperCase()}</Card.Meta>
        {/* <Card.Description>{props.description}</Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default Plane;
