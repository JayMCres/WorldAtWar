import React from "react";
import { Card, Image, Item, Button } from "semantic-ui-react";

const Tank = props => {
  // console.log("Tank Props", props);
  // const tank = Object.values(props);
  // console.log("Tank Obj", tank);

  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="tiny" src={props.images.preview} />
        <Card.Header style={{ "font-size": "12px" }}>{props.name}</Card.Header>
        <Card.Meta>
          {props.type.length > 6 ? (
            <strong style={{ "font-size": "10px" }}>
              {props.type.toUpperCase().slice(0, -4) + " " + "TANK"}
            </strong>
          ) : (
            <strong style={{ "font-size": "10px" }}>
              {props.type.toUpperCase()}
            </strong>
          )}
        </Card.Meta>
        <Card.Meta>{props.nation.toUpperCase()}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button
            basic
            color="red"
            onClick={() => props.addTankArmory(props.tank_id)}
          >
            Add to Armory
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default Tank;
