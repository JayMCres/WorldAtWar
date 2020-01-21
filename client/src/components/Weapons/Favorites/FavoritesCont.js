import React, { Component } from "react";
import { Segment, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import Favorites from "./Favorites";

class FavoritesCont extends Component {
  state = { inputValue: "" };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  filterFavorites = () =>
    this.props.favorites.filter(item => {
      return (
        item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
        item.video.toLowerCase().includes(this.state.inputValue.toLowerCase())
      );
    });
  render() {
    // console.log("favoritesCont Props", this.props.favorites);

    return (
      <Favorites
        favorites={this.props.favorites}
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}
        addItemToCompare={this.props.addItemToCompare}
        addItemToDetails={this.props.addItemToDetails}
        removeFromfavorites={this.props.removeFromfavorites}
      />
    );
  }
}

export default connect(null)(FavoritesCont);
