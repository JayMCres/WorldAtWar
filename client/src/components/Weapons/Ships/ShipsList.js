import React, { Component } from "react";
import { Card, Item } from "semantic-ui-react";
import Ship from "./Ship";

export default class ShipsList extends Component {
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
    // console.log("Plane List Props", this.props);
    const shipsList = Object.values(this.props.ships).slice(
      this.state.startIdx,
      this.state.endIdx
    );

    // console.log("planesList", planesList);
    return (
      <Card.Group itemsPerRow={4}>
        {shipsList.map((item, index) => {
          return <Ship index={index} key={item.ship_id} {...item} />;
        })}
      </Card.Group>
    );
  }
}
