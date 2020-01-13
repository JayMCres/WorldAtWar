import React from "react";
import { Card, Image, Item, Button } from "semantic-ui-react";

const Ship = props => {
  console.log("Plane Props", props);
  // const tank = Object.values(props);
  // console.log("Tank Obj", tank);

  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="small" src={props.images.medium} />
        <Card.Header style={{ "font-size": "16px" }}>
          {" "}
          {props.name.slice(1, -1)}
        </Card.Header>
        <Card.Meta>{props.type}</Card.Meta>
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
export default Ship;
