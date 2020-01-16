import React from "react";
import { Card, Image, Item, Button } from "semantic-ui-react";

const Plane = props => {
  // console.log("Plane Props", props);
  // const tank = Object.values(props);
  // console.log("Tank Obj", tank);

  return (
    <Card>
      <Card.Content>
        <Image floated="right" src={props.images.small} />
        <Card.Header style={{ "font-size": "12px" }}>
          {props.name_i18n}
        </Card.Header>
        <Card.Meta style={{ "font-size": "10px" }}>
          {props.type.toUpperCase()}
        </Card.Meta>
        <Card.Meta style={{ "font-size": "10px" }}>
          {props.nation.toUpperCase()}
        </Card.Meta>
        {/* <Card.Description>{props.description}</Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="3" size="tiny">
          <Button
            basic
            color="green"
            onClick={() => props.addItemToCompare(props.plane_id)}
            size="tiny"
          >
            Mobilize
          </Button>
          <Button
            basic
            color="red"
            onClick={() => props.addPlaneArmory(props.plane_id)}
            size="tiny"
          >
            Add to Armory
          </Button>
          <Button
            basic
            color="red"
            // onClick={() => props.addShipArmory(props.ship_id)}
            size="tiny"
          >
            Details
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
export default Plane;
