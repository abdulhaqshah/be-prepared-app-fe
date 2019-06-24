import React, { Component, Fragment } from "react";
import * as auth from "../../services/Session";
import "./UserProfile.scss";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

class UserProfile extends Component {
  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");
  
    return (
      <Fragment>
        <div className="profile-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="profile-left-pane">
                  <LeftPane name={name} email={email} />
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
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
export default UserProfile;
