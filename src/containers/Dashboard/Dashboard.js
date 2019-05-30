import React, { Component } from "react";
import Navbar from "./Navbar";
import ContentContainer from "../Dashboard/ContentContainer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const email = this.props.location.state;
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
