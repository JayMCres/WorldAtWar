import React, { Component } from "react";
import { Grid, Image, Segment, Message, Header, Flag } from "semantic-ui-react";
import WeaponCard from "../WeaponCard";
import WeaponHeader from "../WeaponHeader";
import WeaponMenu from "../WeaponMenu";
import VideoPlayer from "../VideoPlayer";
import WeaponCarousel from "../WeaponCarousel";
import ProfileTable from "../ProfileTable";
import { connect } from "react-redux";

class TankSpec extends Component {
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
      weaponryArray: [this.props.detailsWeapon.default_profile.gun].concat(
        ...this.props.detailsWeapon.default_profile.shells
      )
    });
  }

  render() {
    // console.log(" WeaponSpec State", this.state);
    // console.log(" WeaponSpec Props", this.props);

    const weaponaryObj = this.state.weaponryArray.reduce((result, current) => {
      return Object.assign(result, current);
    }, {});

    // console.log("weaponaryObj", weaponaryObj);

    const profile = Object.entries(this.props.profile[0]).map(
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
            <WeaponCard
              detailsWeapon={this.props.detailsWeapon}
              card={this.props.detailsWeapon.images.normal}
            />
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

const mapStateToProps = state => ({
  detailsWeapon: state.weapons.foundWeapon,
  profile: [state.weapons.foundWeapon.default_profile].map(item => {
    return {
      weight: item.weight,
      firepower: item.firepower,
      shot_efficiency: item.shot_efficiency,
      signal_range: item.signal_range,
      speed_forward: item.speed_forward,
      battle_level_range_min: item.battle_level_range_min,
      speed_backward: item.speed_backward,
      max_ammo: item.max_ammo,
      attle_level_range_max: item.attle_level_range_max,
      horsepower: item.hp,
      protection: item.protection,
      max_weight: item.max_weight,
      maneuverability: item.maneuverability,
      hull_weight: item.hull_weight,
      hull_horsepower: item.hull_hp,
      engine: item.engine.name
    };
  })
});

export default connect(mapStateToProps)(TankSpec);
