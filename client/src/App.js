import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
// import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import MainCont from "./components/MainCont";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import LoginMenu from "./components/Login/LoginMenu";
class App extends Component {
  state = {
    currentUser: {},
    users: [],
    activeItem: "login",
    username: "",
    password: "",
    loggedIn: false
  };

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    fetch("http://localhost:5000/api/users")
      .then(response => response.json())
      .then(userList =>
        this.setState({
          users: userList
        })
      );
    this.setState({
      currentUser: JSON.parse(sessionStorage.getItem("foundUser"))
    });
  }

  handleLogIn = event => {
    // console.log("firing");
    // console.log('users', event.target.value)
    event.preventDefault();
    // if(this.state.users.length > 0 ){
    // let foundUser = this.state.users.find(user => user.username === this.state.logEmail && user.password === this.state.logPassword)
    let foundUser = this.state.users.find(user => {
      return (
        user.email === this.state.username &&
        user.password === this.state.password
      );
    });
    //         console.log("foundUser", foundUser)
    if (foundUser !== undefined) {
      this.setState({
        currentUser: foundUser,
        loggedIn: true
      });
      sessionStorage.setItem("foundUser", JSON.stringify(foundUser));
    } else {
      alert("Invalid Password or Username");
    }
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    // console.log("App State", this.state);
    const { activeItem } = this.state;
    const onMenuClick = link => {
      const LOGIN_PAGES = {
        login: (
          <Login
            handleSubmit={this.handleLogIn}
            handleChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
          />
        ),
        signup: <Signup />
      };
      return <div>{LOGIN_PAGES[link]}</div>;
    };
    return this.state.loggedIn ? (
      <MainCont currentUser={this.state.currentUser} />
    ) : (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        {onMenuClick(activeItem)}
        <LoginMenu
          handleMenuClick={this.handleMenuClick}
          activeItem={activeItem}
        />
      </Segment>
    );
  }
}

export default App;
