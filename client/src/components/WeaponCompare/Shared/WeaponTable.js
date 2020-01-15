import React, { Component } from "react";
import { Segment, Table, Message, List } from "semantic-ui-react";
import TableRow from "./TableRow";

export default class WeaponTable extends Component {
  state = { dataObject: {} };

  componenWillMount() {
    this.setState({
      dataObject: this.props.tableData
    });
  }
  // renderTableBody = async () => {
  //   return await Object.entries(this.props.tableData).map(item => {
  //     // console.log(item);
  //     return (
  //       <Table.Body
  //         style={{
  //           overflow: "auto",
  //           maxHeight: 200,
  //           minHeight: 200
  //         }}
  //       >
  //         <Table.Row>
  //           <Table.Cell>{item[0]}</Table.Cell>
  //           <Table.Cell>{item[1]}</Table.Cell>
  //         </Table.Row>
  //       </Table.Body>
  //     );
  //   });
  // };
  render() {
    console.log("Table", this.props.tableData);
    // const tableList = Object.entries(this.props.tableData);
    return (
      <Segment
        style={{
          overflow: "auto",
          maxHeight: 250,
          minHeight: 250
        }}
      >
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Label</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Object.entries(this.props.tableData).map((item, index) => {
              return (
                <Table.Row>
                  <Table.Cell>{item[0]}</Table.Cell>
                  <Table.Cell>{item[1]}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
