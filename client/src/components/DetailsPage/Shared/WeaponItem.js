import React from "react";
import { Image, List } from "semantic-ui-react";

const WeaponItem = props => {
  // console.log("Weapon Item Props", props);
  return (
    <List.Item>
      <List.Content floated="right">
        {props.value === null || props.value === undefined
          ? "N/A"
          : props.value}
      </List.Content>
      <List.Icon name="crosshairs" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{props.label.replace(/,/g, "-")}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default WeaponItem;
