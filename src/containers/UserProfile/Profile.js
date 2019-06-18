import React, { Component, Fragment } from "react";
import Navbar from "../../containers/Dashboard/Navbar";
import * as auth from "../../services/Session";
import "./Profile.scss";
// import ControlledPopup from './ControlledPopup'
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

class Profile extends Component {
  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");
    // return(<ControlledPopup/>);
    return (

      <Fragment>
        <Navbar name={name} />
        <div className="profile-container">
          <div className="container">
            <div className="profile-left-pane">
              <LeftPane name={name} email={email} />
            </div>
            <div className="profile-right-pane">
              <RightPane />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Profile;
