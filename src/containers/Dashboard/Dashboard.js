import React, { Component } from "react";
import Navbar from "./Navbar";
import ContentContainer from "../Dashboard/ContentContainer";

class Dashboard extends Component {

  render() {
    debugger;
    const email = localStorage.getItem("email");
    var name = email.substring(0, email.lastIndexOf("@"));
    return (
      <div>
        <Navbar email={name} />
        <ContentContainer />
      </div>
    );
  }
}

export default Dashboard;
