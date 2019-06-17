import React, { Component, Fragment } from "react";
import Navbar from '../../containers/Dashboard/Navbar'

class Profile extends Component {
  render() {
    return (
      <Fragment>
          <Navbar/>
        <div className="container profile-container">
          <div className="user-profile" />
          <div className="user-info" />
        </div>
      </Fragment>
    );
  }
}
export default Profile;
