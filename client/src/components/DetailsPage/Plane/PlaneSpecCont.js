import React, { Component } from "react";

import { Segment, Icon, Grid } from "semantic-ui-react";
import { fetchPlane } from "../../../actions/weapon";
import { connect } from "react-redux";
import PlaneSpec from "./PlaneSpec";

class PlaneSpecCont extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlane(this.props.detailsWeapon.id));
  }
  render() {
    console.log("plane spec cont props", this.props);
    return <PlaneSpec />;
  }
}

const mapStateToProps = state => ({
  detailsWeapon: state.weapons.foundWeapon
});

export default connect(mapStateToProps)(PlaneSpecCont);
