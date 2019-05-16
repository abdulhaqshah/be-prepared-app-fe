import React, { Component } from "react";
import NavBar from "../Dashboard/NavBar";
import SideBar from "./SideBar";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
      </div>
    );
  }
}

export default DashBoard;
