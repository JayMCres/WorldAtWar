import React, { Component } from "react";
import { List, Item } from "semantic-ui-react";

export default class ProfileFeedItem extends Component {
  render() {
    console.log("Plane Feed Item Props", this.props);
    return (
      <List.Item>
        {this.props.profileData === undefined ? (
          <div>Loading</div>
        ) : (
          Object.entries(this.props.profileData).map(item => {
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
          })
        )}
      </List.Item>
    );
  }
}
