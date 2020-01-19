import React, { Component } from "react";
import { Card, Image, Item, Button } from "semantic-ui-react";

export default class Tank extends Component {
  handleFormDataSubmission = async () => {
    await this.props.addItemToDetails(this.props.tank_id);
    await this.props.handleshowForm();
  };
  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated="right" size="tiny" src={this.props.images.preview} />
          <Card.Header style={{ "font-size": "12px" }}>
            {this.props.name}
          </Card.Header>
          <Card.Meta>
            {this.props.type.length > 6 ? (
              <strong style={{ "font-size": "10px" }}>
                {this.props.type.toUpperCase().slice(0, -4) + " " + "TANK"}
              </strong>
            ) : (
              <strong style={{ "font-size": "10px" }}>
                {this.props.type.toUpperCase()}
              </strong>
            )}
          </Card.Meta>
          <Card.Meta>{this.props.nation.toUpperCase()}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths="3" size="tiny">
            <Button
              basic
              color="green"
              onClick={() => this.props.addItemToCompare(this.props.tank_id)}
              size="tiny"
            >
              Mobilize
            </Button>
            <Button
              basic
              color="red"
              onClick={() => this.props.addTankArmory(this.props.tank_id)}
              size="tiny"
            >
              Add to Armory
            </Button>
            <Button
              basic
              color="red"
              onClick={() => this.handleFormDataSubmission(this.props.tank_id)}
              size="tiny"
            >
              Details
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}
// export default Tank;
