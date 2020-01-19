import React, { Component } from "react";
import { Grid, Segment, Button, List, Header, Icon } from "semantic-ui-react";
import WeaponPicture from "./WeaponPicture";
import WeaponItem from "./WeaponItem";

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
    console.log("Weapon Coursel Props", this.props);
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
          <Grid.Column width={10}>
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
          <Grid.Column width={6}>
            <Header as="h3" block>
              <Icon name="chess" />
              <Header.Content>Weapon Systems</Header.Content>
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
              {Object.entries(this.props.weaponary).map(
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
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
