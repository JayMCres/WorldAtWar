import React from "react";
import { Table, List } from "semantic-ui-react";

const TableRow = props => {
  console.log("table row", typeof props.value);

  return (
    <List.Item>
      <List.Content floated="right">
        <List.Content>
          {typeof props.value === undefined || typeof props.value === "object"
            ? "N/A"
            : props.value}
        </List.Content>
      </List.Content>

      <List.Content>{props.label}</List.Content>
    </List.Item>
  );
};

export default TableRow;
