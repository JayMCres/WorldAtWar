import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import ShipSpec from "./ShipSpec";
import { connect } from "react-redux";

class ShipSpecCont extends Component {
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
    if (this.state.endIdx === Object.values(this.props.ships).length - 1) {
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
    console.log("Ship Spec Cont Props", this.props);
    const shipsList = Object.values(this.props.ships).slice(
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
        <Label
          size="medium"
          as="a"
          corner="left"
          color="grey"
          onClick={this.handleIntervalStart}
        >
          <Icon name="play" disabled={this.state.changeInterval === true} />
        </Label>

        <Label
          size="medium"
          as="a"
          corner="right"
          color="grey"
          onClick={this.handleIntervalStop}
        >
          <Icon name="pause" disabled={this.state.changeInterval === false} />
        </Label>
        {shipsList.map(item => {
          return <ShipSpec key={item.tank_id} {...item} />;
        })}
      </Segment>
    );
  }
}

export default connect(null)(ShipSpecCont);
