import React, { Component } from "react";
import { Image, List, Item } from "semantic-ui-react";
import ProfileFeedItem from "./ProfileFeedItem";

export default class ProfileFeed extends Component {
  render() {
    // console.log("Plane Profile Feed Props", this.props);

    return (
      <List.Item>
        {Object.entries(this.props.profileData).map(item => {
          return (
            <Item.Group
              style={{
                "border-color": "#6666ff",
                "border-bottom-style": "solid",
                "border-width": "1px"
              }}
            >
              <Item>
                <Item.Content
                  verticalAlign="middle"
                  style={{ "font-size": "12px" }}
                >
                  {item[0]}
                </Item.Content>

                <Item floated="right">
                  <Item.Content
                    verticalAlign="middle"
                    style={{ "font-size": "12px" }}
                  >
                    {item[1]}
                  </Item.Content>
                </Item>
              </Item>
            </Item.Group>
          );
        })}
      </List.Item>
    );
  }
}
