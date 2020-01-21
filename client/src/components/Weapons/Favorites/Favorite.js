import React from "react";
import { Image, Button, Icon, List } from "semantic-ui-react";

const Favorite = props => {
  // console.log("Favorite Props", props);
  // const tank = Object.values(props);
  // console.log("Tank Obj", tank);

  return (
    <List.Item
      style={{
        "border-color": "#6666ff",
        "border-bottom-style": "solid",
        "border-width": "1px"
      }}
    >
      <List.Content>
        <Image
          floated="right"
          size="tiny"
          verticalAlign="middle"
          src={props.picture}
          onClick={() => props.addItemToDetails(props.weaponId)}
        />
        <List.Header style={{ color: "white", "font-size": "12px" }}>
          <span>
            {props.name} || {props.video.toUpperCase()}
          </span>
        </List.Header>
        <List.Description style={{ color: "white", "font-size": "9px" }}>
          <br></br>
          <Button.Group inverted size="mini" icon>
            <Button
              size="mini"
              inverted
              circular
              icon="remove"
              onClick={() => props.removeFromfavorites(props.id)}
            />
            <Button size="mini" inverted circular icon="settings" />
          </Button.Group>
        </List.Description>
      </List.Content>
    </List.Item>
  );
};
export default Favorite;
