import React, { Component, Fragment } from "react";
import "./UserProfile.scss";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.notificationRef = this.props.notificationRef;
  }
  render() {
    return (
      <Fragment>
        <div className="profile-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="profile-left-pane">
                  <LeftPanel notificationRef={this.notificationRef} />
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="profile-right-pane">
                  <RightPanel notificationRef={this.notificationRef} />
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
