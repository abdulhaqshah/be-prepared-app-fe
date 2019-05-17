import React, { Component } from "react";
import NavBar from "../Dashboard/NavBar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ContentContainer from "../Dashboard/ContentContainer";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentContainer/>
        <DashboardFooter/>
       
      </div>
    );
  }
}

export default DashBoard;
