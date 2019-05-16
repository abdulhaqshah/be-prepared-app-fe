import React, { Component } from "react";
import NavBar from "../Dashboard/NavBar";
import DashboardFooter from "../Dashboard/DashboardFooter";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <DashboardFooter/>
      </div>
    );
  }
}

export default DashBoard;
