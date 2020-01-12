import React, { Component } from "react";
import { Grid, Image, Segment, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import TankSpecCont from "./Tank/TankSpecCont";
import ShipSpecCont from "./Ship/ShipSpecCont";

class WeaponsSpecCont extends Component {
  render() {
    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <Grid columns="equal">
          <Grid.Column>
            <TankSpecCont tanks={this.props.tanks} />
          </Grid.Column>
          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>
          <Grid.Column>
            <ShipSpecCont ships={this.props.ships} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  tanks: state.weapons.tanks,
  ships: state.weapons.ships
});

export default connect(mapStateToProps)(WeaponsSpecCont);
