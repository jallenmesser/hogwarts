import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";

class App extends Component {

  state ={
    hogs: hogs
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {/* <HelloWorld /> */}
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
