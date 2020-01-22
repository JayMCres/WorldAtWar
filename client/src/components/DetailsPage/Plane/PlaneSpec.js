import React, { Component } from "react";
import { Grid, Image, Segment, Message, Header, Flag } from "semantic-ui-react";
import WeaponCard from "../WeaponCard";
import WeaponHeader from "../WeaponHeader";
import ProfileTable from "../ProfileTable";
import VideoPlayer from "../VideoPlayer";
import WeaponCarousel from "./WeaponCarousel";
import WeaponMenu from "../WeaponMenu";

import { connect } from "react-redux";

class PlaneSpec extends Component {
  state = {
    flag: "us",
    showProfile: true
  };

  handleShowProfile = () => {
    this.setState({
      showProfile: !this.state.showProfile
    });
  };

  render() {
    // console.log(" shipSpec State", this.state);
    console.log(" PlaneSpec Props", this.props);

    const profile = Object.entries(this.props.profile).map(([key, value]) => {
      let label = key
        .split("_")
        .map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join();

      return { [label]: value };
    });

    // console.log(" profile", profile);
    const weaponsArray = this.props.weapons.map(weapon => {
      return { ...weapon };
    });
    // console.log("weaponsArray", weaponsArray);
    const weaponaryObj = weaponsArray.reduce((result, current) => {
      return Object.assign(result, current);
    }, {});
    // console.log("weaponaryObj", weaponaryObj);
    const weapons = { ...weaponaryObj };
    console.log("weapons", weapons);
    return (
      <Segment>
        <Grid columns={3} divided>
          <Grid.Column width={7}>
            <WeaponHeader detailsWeapon={this.props.detailsWeapon} />
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
  plane: state.weapon.plane,
  profile: state.weapon.plane[0].specification,
  weapons: [
    ...state.weapon.plane[1].bomb.map(item => {
      if (item !== null) {
        return {
          bomb_name: item.name_i18n,
          explosion_damage_max: item.explosion_damage_max,
          explosion_radius: item.texplosion_radius
          // image: item.image
        };
      }
    }),
    ...state.weapon.plane[1].gun.map(item => {
      if (item !== null) {
        return {
          gun_name: item.name_i18n,
          gun_type: item.type_i18n
          // image: item.image
        };
      }
    })
  ]
});

export default connect(mapStateToProps)(PlaneSpec);
