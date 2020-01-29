import React, { Component } from "react";

import { fetchPlaneDetails } from "../../../actions/weapon";
import { connect } from "react-redux";
import PlaneSpec from "./PlaneSpec";

class PlaneSpecCont extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPlaneDetails(this.props.detailsWeapon.id));
  }
  render() {
    // console.log("plane spec cont props", this.props);
    return <PlaneSpec />;
  }
}

const mapStateToProps = state => ({
  detailsWeapon: state.weapons.foundWeapon
});

export default connect(mapStateToProps)(PlaneSpecCont);
