import React, { Component, Fragment } from "react";
import Navbar from '../../containers/Dashboard/Navbar'
import * as auth from '../../services/Session'

class Profile extends Component {
  render() {
    const name = auth.getItem("name");
    return (
      <Fragment>
          <Navbar name={name}/>
        <div className="container profile-container">
          <div className="user-profile" />
          <div className="user-info" />
        </div>
      </Fragment>
    );
  }
}
export default Profile;
