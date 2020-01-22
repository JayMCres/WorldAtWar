import React, { Component } from "react";
import { Grid, Image, Segment, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import TankSpecCont from "./Tank/TankSpecCont";
import ShipSpecCont from "./Ship/ShipSpecCont";
import PlaneSpecCont from "./Plane/PlaneSpecCont";

class WeaponsSpecCont extends Component {
  render() {
    return (
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
    );
  }
}

const mapStateToProps = state => ({
  tanks: state.weapon.tanks,
  ships: state.weapon.ships,
  planes: state.weapon.planes
});

export default connect(mapStateToProps)(WeaponsSpecCont);
