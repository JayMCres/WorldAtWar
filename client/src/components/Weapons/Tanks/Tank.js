import React, { Component } from "react";
import { Card, Image, Item, Button, Label, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
class Tank extends Component {
  handleFormDataSubmission = async () => {
    await this.props.addItemToDetails(this.props.tank_id);
    await this.props.handleshowForm();
  };
  render() {
    console.log("tank props", this.props);
    return (
      <Card>
        <Label as="a" corner="right" color="blue">
          <Icon
            name="remove"
            onClick={() => this.props.handleshowForm(this.props.tank_id)}
            // disabled={this.props.detailsWeapon.pictureone }
          />
        </Label>
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
              disabled={this.props.weapons === undefined}
            >
              Mobilize
            </Button>
            <Button
              basic
              color="red"
              onClick={() => this.props.addWeaponToArmory(this.props.tank_id)}
              size="tiny"
              disabled={this.props.weapons === undefined}
            >
              Add to Armory
            </Button>
            <Button
              basic
              color="red"
              onClick={() => this.props.addItemToDetails(this.props.tank_id)}
              size="tiny"
              disabled={this.props.weapons === undefined}
            >
              Details
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}
const mapStateToProps = state => ({
  weapons: state.weapons.weapons[0]
});

export default connect(mapStateToProps)(Tank);
