import React, { Component } from "react";
import WeaponForm from "./WeaponForm";
import { Segment, Form, Button, Label, Icon } from "semantic-ui-react";

class WeaponFormCont extends Component {
  state = {
    name: "",
    weaponId: "",
    picture: "",
    video: ""
  };

  componentWillMount() {
    this.setState({
      name: this.props.detailsWeapon.name,
      weaponId: this.props.detailsWeapon.id
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
        picture: this.state.picture,
        video: this.state.video
      })
    })
      .then(response => response.json())
      .then(
        this.setState({
          name: "",
          weaponId: "",
          picture: "",
          video: ""
        })
      );
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    // prettier-ignore
    // const {name, type,subtype,power,ceiling,country,dimensions,weight,crew,imageone,imagetwo,imagethree,imagefour,description,propulsion,speed,range,armor,weaponone,weapontwo,weaponthree,weaponfour,video} = this.state;
    // const formInputs = this.state;
    // const inputObj = { ...formInputs };
    console.log("WeaponFormCont props", this.props);
    // console.log("formInputs", inputObj);
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
              name="picture"
              placeholder="Enter Picture ...."
              value={this.state.picture}
              onChange={this.handleInputChange}
              ref="picture"
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
          {/* {Object.entries(inputObj).map(([key, value]) => {
            return (
              <WeaponForm
                value={value}
                label={key}
                handleInputChange={this.handleInputChange}
              />
            );
          })} */}

          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default WeaponFormCont;
