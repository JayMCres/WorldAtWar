import React, { Component } from "react";
import { Feed, List, Card } from "semantic-ui-react";

import Favorite from "./Favorite";

export default class Favorites extends Component {
  render() {
    // console.log("favorites", this.props);

    return (
      // <List
      //   divided
      //   relaxed
      //   style={{
      //     overflow: "auto",
      //     maxHeight: 200,
      //     minHeight: 200
      //   }}
      // >
      <Card.Group
        itemsPerRow={4}
        style={{
          overflow: "auto",
          maxHeight: 200,
          minHeight: 200
        }}
      >
        {this.props.favorites.map((item, index) => {
          return (
            <Favorite
              key={index}
              {...item}
              addItemToCompare={this.props.addItemToCompare}
              addItemToDetails={this.props.addItemToDetails}
              removeFromfavorites={this.props.removeFromfavorites}
            />
          );
        })}
      </Card.Group>
    );
  }
}
