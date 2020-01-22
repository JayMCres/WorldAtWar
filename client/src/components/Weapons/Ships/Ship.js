import React, { Component } from "react";
import { Card, Image, Item, Button, Label, Icon } from "semantic-ui-react";
import { findWeapon } from "../../../actions/weapons";
import { connect } from "react-redux";
class Ship extends Component {
  render() {
    // console.log("tank props", this.props);
    return (
      <Card>
        <Label as="a" corner="right" color="grey">
          <Icon
            name="wordpress forms"
            onClick={() => this.props.handleshowForm(this.props.ship_id)}
          />
        </Label>
        <Card.Content>
          <Image floated="right" size="tiny" src={this.props.images.small} />
          <Card.Header style={{ "font-size": "12px" }}>
            {this.props.name.slice(1, -1)}
          </Card.Header>
          <Card.Meta>
            <strong style={{ "font-size": "10px" }}>
              {this.props.type.toUpperCase()}
            </strong>
          </Card.Meta>
          <Card.Meta>{this.props.nation.toUpperCase()}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths="3" size="tiny">
            <Button
              basic
              color="green"
              onClick={() => this.props.addItemToCompare(this.props.ship_id)}
              size="tiny"
              disabled={this.props.weapons === undefined}
            >
              Mobilize
            </Button>
            <Button
              basic
              color="red"
              onClick={() => this.props.addWeaponToArmory(this.props.ship_id)}
              size="tiny"
              disabled={this.props.weapons === undefined}
            >
              Add to Armory
            </Button>
            <Button
              basic
              color="red"
              onClick={() => this.props.addItemToDetails(this.props.ship_id)}
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

export default connect(mapStateToProps)(Ship);
