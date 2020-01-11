import React, { Component } from "react";
import { Card, Item } from "semantic-ui-react";
import Plane from "./Plane";

export default class PlanesList extends Component {
  state = {
    startIdx: 0,
    endIdx: 4
  };

  // componentDidMount() {
  //   this.startCarousel();
  // }

  // startCarousel = () => {
  //   this.carouselInterval = setInterval(() => {
  //     this.handleExchanges();
  //   }, 800);
  // };

  // showMore = () => {
  //   this.setState(prevState => {
  //     return {
  //       startIdx: prevState.startIdx + 8,
  //       endIdx: prevState.endIdx + 8
  //     };
  //   });
  // };

  // handleExchanges = () => {
  //   if (this.state.endIdx === this.props.exchanges.length - 4) {
  //     this.setState({
  //       startIdx: 0,
  //       endIdx: 8
  //     });
  //   }
  //   this.showMore();
  // };
  // componentWillUnmount() {
  //   clearInterval(this.carouselInterval);
  // }

  render() {
    console.log("Plane List Props", this.props);
    const planesList = Object.values(this.props.planes).slice(
      this.state.startIdx,
      this.state.endIdx
    );

    // console.log("planesList", planesList);
    return (
      <Card.Group itemsPerRow={4}>
        {planesList.map((item, index) => {
          return <Plane index={index} key={item.plane_id} {...item} />;
        })}
      </Card.Group>
    );
  }
}
