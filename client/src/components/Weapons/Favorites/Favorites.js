import React, { Component } from "react";
import { Segment, List, Message } from "semantic-ui-react";

import Favorite from "./Favorite";
import FavoriteHeader from "./FavoriteHeader";

export default class Favorites extends Component {
  render() {
    // console.log("favorites", this.props);

    return (
      <Segment
        style={{
          "background-color": "black"
        }}
      >
        <FavoriteHeader
          inputValue={this.props.inputValue}
          handleChange={this.props.handleChange}
        />
        {this.props.favorites.length === 0 ? (
          <Message>No Weapons</Message>
        ) : (
          <List
            divided
            relaxed
            style={{
              overflow: "auto",
              maxHeight: 240,
              minHeight: 240
            }}
          >
            {this.props.favorites.map((item, index) => {
              return (
                <Favorite
                  key={index}
                  {...item}
                  addItemToCompare={this.props.addItemToCompare}
                />
              );
            })}
          </List>
        )}
      </Segment>
    );
  }
}
