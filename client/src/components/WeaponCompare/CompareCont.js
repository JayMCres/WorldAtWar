import React, { Component } from "react";
import { Grid, Image, Segment, Header, Icon } from "semantic-ui-react";

export default class CompareCont extends Component {
  render() {
    return (
      <Segment
      // style={{
      //   "background-color": "black"
      // }}
      >
        <Grid columns="equal">
          <Grid.Column>Test</Grid.Column>
          <Grid.Column>Test</Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
