import React, { Component } from "react";
import Navbar from "./Navbar";
import ContentContainer from "../Dashboard/ContentContainer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ContentContainer /> 
      </div>
    );
  }
}

export default Dashboard;
