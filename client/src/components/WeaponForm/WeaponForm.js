import React, { Component } from "react";

import { Segment, Form, Button } from "semantic-ui-react";

class WeaponForm extends Component {
  render() {
    console.log("Weapon Form Props", this.props);
    const { label, value } = this.props;

    return (
      <Form.Field>
        <label>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
        <input
          name={label}
          placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
          value={value}
          onChange={this.props.handleInputChange}
          ref={label}
        />
      </Form.Field>
    );
  }
}

export default WeaponForm;
