import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import TankSpec from "./TankSpec";
import WeaponHeader from "./WeaponHeader";
import { connect } from "react-redux";

class TankSpecCont extends Component {
  state = {
    startIdx: 0,
    endIdx: 1,
    changeInterval: true
  };

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.handleSpecs();
    }, 8000);
  };

  handleIntervalStop = () => {
    clearInterval(this.carouselInterval);
    this.setState({
      changeInterval: false
    });
  };
  handleIntervalStart = () => {
    this.startCarousel();
    this.setState({
      changeInterval: true
    });
  };
  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 1,
        endIdx: prevState.endIdx + 1
      };
    });
  };

  handleSpecs = () => {
    if (this.state.endIdx === Object.values(this.props.tanks).length - 1) {
      this.setState({
        startIdx: 0,
        endIdx: 1
      });
    }
    this.showMore();
  };
  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }
  render() {
    // console.log("Tanks Spec Cont Props", this.state);
    const tanksList = Object.values(this.props.tanks).slice(
      this.state.startIdx,
      this.state.endIdx
    );

    return (
      <Segment
        onMouseLeave={this.handleIntervalExit}
        style={{
          "background-color": "black"
        }}
      >
        {tanksList.map(item => {
          return (
            <WeaponHeader
              key={item.tank_id}
              {...item}
              handleIntervalStop={this.handleIntervalStop}
              handleIntervalStart={this.handleIntervalStart}
              changeInterval={this.state.changeInterval}
            />
          );
        })}
        {tanksList.map(item => {
          return <TankSpec key={item.tank_id} {...item} />;
        })}
      </Segment>
    );
  }
}

export default connect(null)(TankSpecCont);
