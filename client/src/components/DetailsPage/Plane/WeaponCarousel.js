import React, { Component } from "react";
import { Grid, Segment, Button, List, Header, Icon } from "semantic-ui-react";
import WeaponPicture from "../Shared/WeaponPicture";
import WeaponItem from "../Shared/WeaponItem";

export default class WeaponCarousel extends Component {
  state = {
    startIdx: 0,
    endIdx: 1
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 1,
        endIdx: prevState.endIdx + 1
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 1,
        endIdx: prevState.endIdx - 1
      };
    });
  };

  render() {
    // console.log("Plane Coursel Props", this.props);
    const weapon = this.props.picture.slice(
      this.state.startIdx,
      this.state.endIdx
    );
    // console.log("Weapon ", weapon);

    return (
      <Segment
        inverted
        style={{
          "background-color": "black"
        }}
      >
        <Grid columns={2} divided>
          {this.props.picture.length === 0 ? (
            <Grid.Column width={10}>
              <WeaponPicture weaponPic={weapon} />
            </Grid.Column>
          ) : (
            <Grid.Column width={9}>
              <Button
                basic
                inverted
                color="violet"
                floated="left"
                onClick={() => this.showLess()}
                content="Back"
                icon="left arrow"
                labelPosition="left"
                disabled={this.state.startIdx === 0}
              />
              <Button
                basic
                inverted
                color="violet"
                floated="right"
                onClick={() => this.showMore()}
                content="Next"
                icon="right arrow"
                labelPosition="right"
                disabled={this.state.endIdx > this.props.picture.length - 1}
              />
              <WeaponPicture weaponPic={weapon} />
            </Grid.Column>
          )}
          <Grid.Column width={7}>
            <Segment
              inverted
              style={{
                "background-color": "black"
              }}
            >
              <Header as="h3" style={{ color: "black" }} block>
                <Icon name="chess" />
                <Header.Content style={{ color: "black" }}>
                  Weapon Systems
                </Header.Content>
              </Header>
              <List
                divided
                relaxed
                style={{
                  overflow: "auto",
                  maxHeight: 200,
                  minHeight: 200
                }}
              >
                {Object.entries(this.props.weaponary[0]).map(
                  ([key, value], index) => {
                    let label = key
                      .split("_")
                      .map(word => {
                        return word.charAt(0).toUpperCase() + word.slice(1);
                      })
                      .join();

                    // console.log("label", label);
                    return <WeaponItem key={key} value={value} label={label} />;
                  }
                )}
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}