import React, { Component } from "react";
import ProfileFeedCont from "./ProfileFeedCont";
import { Segment, Icon, Grid } from "semantic-ui-react";
import { fetchPlane } from "../../../actions/weapons";
import { connect } from "react-redux";
import WeaponCard from "./WeaponCard";

class PlaneSpec extends Component {
  state = { showDetails: true };
  handleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };
  componentDidMount() {
    this.props.dispatch(fetchPlane(this.props.plane_id));
  }
  render() {
    return (
      <Segment
        style={{
          "background-color": "#00008B"
        }}
      >
        <Grid
          style={{
            "background-color": "white"
          }}
        >
          <Grid.Column width={6}>
            <WeaponCard
              images={this.props.images}
              name={this.props.name}
              handleShowDetails={this.handleShowDetails}
            />
          </Grid.Column>
          <Grid.Column
            width={10}
            style={{
              overflow: "auto",
              maxHeight: 200,
              minHeight: 200
            }}
          >
            <ProfileFeedCont />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default connect(null)(PlaneSpec);
