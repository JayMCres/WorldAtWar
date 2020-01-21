import React, { Component } from "react";

import { Segment, Form, Button, Label, Icon } from "semantic-ui-react";

class WeaponForm extends Component {
  state = {
    name: "",
    weaponId: "",
    pictureone: "",
    picturetwo: "",
    video: "",
    edit: false
  };

  componentWillMount() {
    if (Object.values(this.props.weapon).length < 24) {
      this.setState({
        name: this.props.weapon.name,
        weaponId: this.props.weapon.id,
        pictureone: "",
        picturetwo: "",
        video: "",
        edit: false
      });
    } else {
      this.setState({
        name: this.props.weapon.name,
        weaponId: this.props.weapon.weaponId,
        pictureone: this.props.weapon.pictureone,
        picturetwo: this.props.weapon.picturetwo,
        video: this.props.weapon.video,
        edit: true
      });
    }
  }
  addWeapon = event => {
    event.preventDefault();
    // console.log(event.target)
    fetch("http://localhost:5000/api/add_weapon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        weaponId: this.state.weaponId,
        pictureone: this.state.pictureone,
        picturetwo: this.state.picturetwo,
        video: this.state.video
      })
    })
      .then(response => response.json())
      .then(
        this.setState({
          name: "",
          weaponId: "",
          pictureone: "",
          picturetwo: "",
          video: ""
        })
      )
      .then(() => this.props.handleCloseForm());
  };

  editWeapon = event => {
    // console.log("updating");

    event.preventDefault();
    // console.log(event.target)
    fetch(`http://localhost:5000/api/edit_weapon/${this.props.weapon.formId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        nameUpdate: this.state.name,
        weaponIdUpdate: this.state.weaponId,
        pictureoneUpdate: this.state.pictureone,
        picturetwoUpdate: this.state.picturetwo,
        videoUpdate: this.state.video
      })
    })
      .then(
        this.setState({
          name: "",
          weaponId: "",
          pictureone: "",
          picturetwo: "",
          video: ""
        })
      )
      .then(() => this.props.handleCloseForm());
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    // prettier-ignore
    // console.log("Weapon Form State", this.state)
    console.log("Weapon Form Props", this.props);
    return (
      <Segment>
        <Form
          onSubmit={this.state.edit === true ? this.editWeapon : this.addWeapon}
        >
          <Form.Field>
            <label style={{ color: "blue" }}>Weapon Name</label>
            <input
              name="name"
              // placeholder="Enter Name"
              value={this.state.name}
              // onChange={this.handleInputChange}
              ref="name"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "blue" }}>Weapon Id</label>
            <input
              name="weaponId"
              // placeholder="Write Note ...."
              value={this.state.weaponId}
              // onChange={this.handleInputChange}
              ref="weaponId"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "blue" }}>Picture Link</label>
            <input
              name="pictureone"
              placeholder="Enter Picture ...."
              value={this.state.pictureone}
              onChange={this.handleInputChange}
              ref="pictureone"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "blue" }}>Picture Link</label>
            <input
              name="picturetwo"
              placeholder="Enter Picture ...."
              value={this.state.picturetwo}
              onChange={this.handleInputChange}
              ref="picturetwo"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "blue" }}>Video Link</label>
            <input
              name="video"
              placeholder="Enter Video..."
              value={this.state.video}
              onChange={this.handleInputChange}
              ref="video"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default WeaponForm;
