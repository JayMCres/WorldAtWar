import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Tank from "./Tank";

export default class Exchanges extends Component {
  state = {
    startIdx: 0,
    endIdx: 8
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
    console.log("Tank List Props", this.props); // console.log("Exchanges Props", this.state);
    // const exchangeList = this.props.exchanges.slice(
    //   this.state.startIdx,
    //   this.state.endIdx
    // );

    return (
      <Card.Group
        itemsPerRow={8}
        // style={{
        //   "background-color": "black"
        // }}
      >
        {this.props.tanks.map((item, index) => {
          return (
            <Tank index={index} key={item.tank_id} {...Object.values(item)} />
          );
        })}
      </Card.Group>
    );
  }
}
