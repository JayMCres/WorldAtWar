import React, { Component } from "react";
import WeaponForm from "./WeaponForm";
import { Segment, Form, Button, Label, Icon } from "semantic-ui-react";

class WeaponFormCont extends Component {
  state = {
    name: "",
    weaponId: "",
    pictureone: "",
    picturetwo: "",
    video: ""
  };

  componentWillMount() {
    this.setState({
      name: this.props.formWeapon.name,
      weaponId: this.props.formWeapon.id
    });
  }
  addWeapon = event => {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
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
      );
    this.props.handleCloseForm();
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    // prettier-ignore
    // console.log("Weapon Form Props", this.props)
    return (
      <Segment>
        <Label as="a" corner="right" color="red">
          <Icon name="remove" onClick={() => this.props.handleCloseForm()} />
        </Label>
        <Form onSubmit={this.addWeapon}>
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

export default WeaponFormCont;
