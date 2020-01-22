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

    // const profile = Object.entries(this.props.profile).map(([key, value]) => {
    //   let label = key
    //     .split("_")
    //     .map(word => {
    //       return word.charAt(0).toUpperCase() + word.slice(1);
    //     })
    //     .join();

    //   return { [label]: value };
    // });
    // console.log(" profile", profile);

    // const weaponsArray = this.props.weapons.map(weapon => {
    //   return { ...weapon };
    // });
    // console.log("weaponsArray", weaponsArray);
    // const weaponaryObj = weaponsArray.reduce((result, current) => {
    //   return Object.assign(result, current);
    // }, {});
    // // console.log("weaponaryObj", weaponaryObj);
    // const weapons = { ...weaponaryObj };
    // console.log("weapons", weapons);
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
            weaponary={this.props.weapons}
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
            {this.props.profile === null || this.props.profile === undefined ? (
              <Message>Loading</Message>
            ) : (
              <ProfileTable
                tableData={Object.entries(this.props.profile)
                  .map(([key, value]) => {
                    let label = key
                      .split("_")
                      .map(word => {
                        return word.charAt(0).toUpperCase() + word.slice(1);
                      })
                      .join();

                    return { [label]: value };
                  })
                  .reduce((result, current) => {
                    return Object.assign(result, current);
                  }, {})}
              />
            )}
          </Segment>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  detailsWeapon: state.weapons.foundWeapon,
  detailPlane: state.weapon.detailPlane,
  profile: state.weapon.detailPlane[0],

  weapons: [
    { ...state.weapon.detailPlane[1], ...state.weapon.detailPlane[2] }
  ].map(item => {
    if (item !== null || item !== undefined) {
      return {
        gun_name: item.name_i18n,
        gun_type: item.type_i18n,
        bomb_name: item.name_i18n,
        explosion_damage_max: item.explosion_damage_max,
        explosion_radius: item.texplosion_radius
      };
    }
  })
});

export default connect(mapStateToProps)(PlaneSpec);
