import React, { Component } from "react";
import { Grid, Image, Segment, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import TankSpecCont from "./Tank/TankSpecCont";
import ShipSpecCont from "./Ship/ShipSpecCont";
import PlaneSpecCont from "./Plane/PlaneSpecCont";

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
            <PlaneSpecCont planes={this.props.planes} />
          </Grid.Column>
          <Grid.Column>
            <TankSpecCont tanks={this.props.tanks} />
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
  ships: state.weapons.ships,
  planes: state.weapons.planes
});

export default connect(mapStateToProps)(WeaponsSpecCont);
