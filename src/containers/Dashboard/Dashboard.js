import React, { Component } from "react";
import Navbar from "./Navbar";
import ContentContainer from "../Dashboard/ContentContainer";
import * as auth from "../../services/Auth";

class Dashboard extends Component {
  render() {
    const name = auth.getItem("name");
    return (
      <div>
        <Navbar name={name} />
        <ContentContainer />
      </div>
    );
  }
}

export default Dashboard;
