import React from "react";
import { Card, Image } from "semantic-ui-react";

const Tank = props => {
  console.log("Tank Props", props);
  // const tank = Object.values(props);
  // console.log("Tank Obj", tank);

  return (
    <Card>
      <Card.Content>
        {/* <Image floated="right" size="mini" src={props.images.normal} /> */}
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};
export default Tank;
