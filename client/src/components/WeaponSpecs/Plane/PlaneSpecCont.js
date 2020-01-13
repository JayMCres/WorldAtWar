import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import PlaneSpec from "./PlaneSpec";
import { connect } from "react-redux";
import WeaponHeader from "./WeaponHeader";

class PlaneSpecCont extends Component {
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
    if (this.state.endIdx === Object.values(this.props.planes).length - 1) {
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

  handleIntervalState = () => {
    this.setState({ changeInterval: !this.state.changeInterval });
  };

  render() {
    // console.log("Plane Spec Cont Props", this.props);
    const currentPlane = Object.values(this.props.planes).slice(
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
        {currentPlane.map(item => {
          return (
            <WeaponHeader
              key={item.plane_id}
              {...item}
              handleIntervalStop={this.handleIntervalStop}
              handleIntervalStart={this.handleIntervalStart}
              changeInterval={this.state.changeInterval}
            />
          );
        })}
        {currentPlane.map(item => {
          return <PlaneSpec key={item.plane_id} id={item.plane_id} {...item} />;
        })}
      </Segment>
    );
  }
}
export default PlaneSpecCont;

// export default connect(null)(PlaneSpecCont);
