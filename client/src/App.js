import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
// import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import MainCont from "./components/MainCont";

class App extends Component {
  render() {
    return (
      <Segment
        style={{
          "background-color": "#F5F5F5"
        }}
      >
        <MainCont />
      </Segment>
    );
  }
}

export default App;
