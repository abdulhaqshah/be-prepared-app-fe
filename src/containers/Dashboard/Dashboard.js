import React, { Component } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ContentContainer from "../Dashboard/ContentContainer";
import Sidebar from "./Sidebar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <ContentContainer />
        <DashboardFooter />
   
      </div>
    );
  }
}

export default Dashboard;
