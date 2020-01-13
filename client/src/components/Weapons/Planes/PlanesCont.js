import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import PlanesList from "./PlanesList";

class PlanesCont extends Component {
  filterPlanes = () =>
    Object.values(this.props.planes).filter(item => {
      return (
        item.name_i18n
          .toLowerCase()
          .includes(this.props.inputValue.toLowerCase()) ||
        item.type.toLowerCase().includes(this.props.inputValue.toLowerCase()) ||
        item.nation.toLowerCase().includes(this.props.inputValue.toLowerCase())
      );
    });
  render() {
    // console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <PlanesList planes={this.filterPlanes()} />;
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  planes: state.weapons.planes
});

export default connect(mapStateToProps)(PlanesCont);
