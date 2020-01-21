import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button, Label, Icon } from "semantic-ui-react";
import WeaponForm from "./WeaponForm";

class WeaponFormCont extends Component {
  renderWeaponForm = () => {
    if (this.props.formWeapon.length === 0) {
      return <Segment>Loading....</Segment>;
    } else {
      return (
        <WeaponForm
          weapon={this.props.formWeapon}
          handleCloseForm={this.props.handleCloseForm}
        />
      );
    }
  };
  render() {
    // prettier-ignore
    console.log("Weapon Form Cont Props", this.props)
    return (
      <Segment>
        <Label as="a" corner="right" color="red">
          <Icon name="remove" onClick={() => this.props.handleCloseForm()} />
        </Label>
        {this.renderWeaponForm()}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  weapons: state.weapons.weapons[0],
  formWeapon: state.weapons.foundWeapon
});

export default connect(mapStateToProps)(WeaponFormCont);
