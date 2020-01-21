import React, { Component } from "react";
import { Table, Icon, Header } from "semantic-ui-react";

export default class BattleTable extends Component {
  render() {
    // console.log("Battle Loser Props", this.props);

    return (
      <Table celled striped>
        <Table.Body>
          {Object.entries(this.props.profile).map(([key, value]) => {
            let label = key
              .split("_")
              .map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join();

            return (
              <Table.Row>
                <Table.Cell collapsing>
                  <Icon name="crosshairs" />
                </Table.Cell>
                <Table.Cell>{label.replace(/,/g, " ")}</Table.Cell>
                <Table.Cell collapsing textAlign="right">
                  {value}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
