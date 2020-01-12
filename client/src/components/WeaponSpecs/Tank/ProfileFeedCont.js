import React, { Component } from "react";
import { Image, List, Segment } from "semantic-ui-react";
import ProfileFeed from "./ProfileFeed";

export default class ProfileFeedCont extends Component {
  // state = {
  //   startIdx: 0,
  //   endIdx: 5
  // };

  // componentDidMount() {
  //   this.startCarousel();
  // }

  // startCarousel = () => {
  //   this.carouselInterval = setInterval(() => {
  //     this.handleFeed();
  //   }, 1000);
  // };

  // showMoreFeed = () => {
  //   this.setState(prevState => {
  //     return {
  //       startIdx: prevState.startIdx + 5,
  //       endIdx: prevState.endIdx + 5
  //     };
  //   });
  // };

  // handleFeed = () => {
  //   if (this.state.endIdx === this.props.profile - 1) {
  //     this.setState({
  //       startIdx: 0,
  //       endIdx: 5
  //     });
  //   }
  //   this.showMoreFeed();
  // };

  // componentWillUnmount() {
  //   clearInterval(this.carouselInterval);
  // }
  render() {
    // console.log("Profile Feed Cont Props", this.props.profile);

    // console.log(profileList);

    return (
      <List animated verticalAlign="middle" divided>
        {this.props.profile.map(item => {
          return <ProfileFeed key={item.weight} {...item} />;
        })}
      </List>
    );
  }
}
