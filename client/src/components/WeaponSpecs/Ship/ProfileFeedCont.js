import React, { Component } from "react";
import { Image, List, Segment } from "semantic-ui-react";
import ProfileFeed from "./ProfileFeed";

export default class ProfileFeedCont extends Component {
  render() {
    // console.log("Profile Feed Cont Props", this.props.profile);

    // console.log(profileList);

    return (
      <List animated verticalAlign="middle" divided>
        {this.props.profile.map(item => {
          return <ProfileFeed key={item.Engine} {...item} />;
        })}
      </List>
    );
  }
}
