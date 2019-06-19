import React, { Component, Fragment } from "react";
import Navbar from "../../containers/Dashboard/Navbar";
import * as auth from "../../services/Session";
import "./Profile.scss";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

class Profile extends Component {
  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");
    var initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return (
      <Fragment>
        <Navbar name={name} />
        <div className="profile-container">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="profile-left-pane">
                  <LeftPane initials={initials} name={name} email={email} />
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="profile-right-pane">
                  <RightPane />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Profile;
