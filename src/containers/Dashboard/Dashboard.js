import React, { Component } from "react";
import ContentContainer from "../Dashboard/ContentContainer";
import * as auth from "../../services/Session";

class Dashboard extends Component {
  render() {
    const name = auth.getItem("name");

    return (
      <div>
        <ContentContainer />
      </div>
    );
  }
}

export default Dashboard;
