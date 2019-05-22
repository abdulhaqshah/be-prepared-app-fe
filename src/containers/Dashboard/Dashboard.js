import React, { Component } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ContentContainer from "../Dashboard/ContentContainer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ContentContainer />
        <DashboardFooter />
   
      </div>
    );
  }
}

export default Dashboard;
