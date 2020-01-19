import React, { Component } from "react";
import { Grid, Image, Segment, Message, Header, Flag } from "semantic-ui-react";
import WeaponCard from "../WeaponCard";
import WeaponHeader from "../WeaponHeader";
import WeaponMenu from "../WeaponMenu";
import VideoPlayer from "../VideoPlayer";
import WeaponCarousel from "../WeaponCarousel";
import ProfileTable from "../ProfileTable";

export default class WeaponSpec extends Component {
  state = {
    activeItem: "profile",
    flag: "us",
    weaponryArray: [],
    showProfile: true
  };
  handleItemClick = async (e, { name }) => {
    await this.setState({ activeItem: name });
  };

  handleShowProfile = () => {
    this.setState({
      showProfile: !this.state.showProfile
    });
  };
  componentDidMount() {
    this.setState({
      weaponryArray: this.props.detailsWeapon.gun.concat(
        ...this.props.detailsWeapon.shells
      )
    });
  }

  render() {
    // console.log(" WeaponSpec State", this.state);
    // console.log(" WeaponSpec Props", this.props);

    const weaponaryObj = this.state.weaponryArray.reduce((result, current) => {
      return Object.assign(result, current);
    }, {});

    const profile = Object.entries(this.props.detailsWeapon.profile[0]).map(
      ([key, value]) => {
        let label = key
          .split("_")
          .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join();

        return { [label]: value };
      }
    );

    return (
      <Segment>
        <Grid columns={3} divided>
          <Grid.Column width={7}>
            <WeaponHeader detailsWeapon={this.props.detailsWeapon} />
            <Header as="h4">
              <Flag name={this.state.flag} />
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
            <WeaponCard detailsWeapon={this.props.detailsWeapon} />
          </Grid.Column>
        </Grid>
        {this.props.detailsWeapon.pictureone === undefined ? null : (
          <WeaponCarousel
            weaponary={weaponaryObj}
            picture={[
              this.props.detailsWeapon.pictureone,
              this.props.detailsWeapon.picturetwo
            ]}
          />
        )}

        <WeaponMenu handleShowProfile={this.handleShowProfile} />
        {!this.state.showProfile ? null : (
          <Segment
            style={{
              overflow: "auto",
              maxHeight: 250,
              minHeight: 250
            }}
          >
            <ProfileTable
              tableData={profile.reduce((result, current) => {
                return Object.assign(result, current);
              }, {})}
            />
          </Segment>
        )}
      </Segment>
    );
  }
}
