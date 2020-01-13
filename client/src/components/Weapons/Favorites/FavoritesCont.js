import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import Favorites from "./Favorites";

class FavoritesCont extends Component {
  render() {
    // console.log("Tanks Cont Props", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <Favorites />;
      </Segment>
    );
  }
}

export default connect(null)(FavoritesCont);
