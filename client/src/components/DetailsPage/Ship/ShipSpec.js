import React, { Component } from "react";
import { Grid, Segment, Message, Header, Flag } from "semantic-ui-react";

import WeaponCard from "../Shared/WeaponCard";
import WeaponHeader from "./WeaponHeader";
import VideoPlayer from "../Shared/VideoPlayer";
import WeaponCarousel from "./WeaponCarousel";

import { connect } from "react-redux";
import { fetchShipWeapons } from "../../../actions/ships";

class ShipSpec extends Component {
  state = {
    activeItem: "profile",
    flag: "",
    weaponryArray: [],
    showProfile: true
  };

  componentWillMount() {
    this.props.dispatch(fetchShipWeapons(this.props.detailsWeapon));
  }

  componentDidMount() {
    if (this.props.detailsWeapon.nation === "usa") {
      this.setState({
        flag: "us"
      });
    } else {
      this.setState({
        flag: "jp"
      });
    }
  }
  handleItemClick = async (e, { name }) => {
    await this.setState({ activeItem: name });
  };

  handleShowProfile = () => {
    this.setState({
      showProfile: !this.state.showProfile
    });
  };

  render() {
    // console.log(" shipSpec State", this.state);
    console.log(" ShipSpec Props", this.props);

    return (
      <Segment>
        <Grid columns={3} divided>
          <Grid.Column width={7}>
            <WeaponHeader detailsWeapon={this.props.detailsWeapon} />
            <Header as="h4">
              <Flag size="medium" name={this.state.flag} />
              <Header.Content>Weapon Description</Header.Content>
            </Header>
            <Message
              style={{
                overflow: "auto",
                maxHeight: 100,
                minHeight: 100
              }}
            >
              {this.props.detailsWeapon.description}
            </Message>
          </Grid.Column>
          <Grid.Column width={6}>
            <VideoPlayer video={this.props.detailsWeapon.video} />
          </Grid.Column>
          <Grid.Column width={3}>
            <WeaponCard
              detailsWeapon={this.props.detailsWeapon}
              card={this.props.detailsWeapon.images.large}
            />
          </Grid.Column>
        </Grid>
        {/* {this.props.detailsWeapon.pictureone === undefined ? null : ( */}
        <WeaponCarousel
          weaponary={this.props.weapons}
          picture={[
            this.props.detailsWeapon.pictureone,
            this.props.detailsWeapon.picturetwo
          ]}
        />
        {/* )} */}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  detailsWeapon: state.weapons.foundWeapon,
  weapons: state.ship.weapons
});

export default connect(mapStateToProps)(ShipSpec);
