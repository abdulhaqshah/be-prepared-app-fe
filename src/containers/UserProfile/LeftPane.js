import React, { Component, Fragment } from "react";
import EditIntro from "../../containers/UserProfile/EditIntro";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification, getInitials } from "../../utilities/index";
import * as auth from "../../services/Session";
import "./LeftPane.scss";
import AboutUser from "./AboutUser";

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = { readOnly: true, open: true, userAbout: "" };
    this.closeModal = this.closeModal.bind(this);
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
  }

  closeModal() {
    this.setState({ open: false });
    this.setAboutState();
    addNotification(
      this.notificationDOMRef,
      "success",
      "success",
      "User has been updated"
    );
  }
  setAboutState = () => {
    const about = auth.getItem("about");

    this.setState({ userAbout: about });
  };
  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");

    return (
      <Fragment>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="about">
          <button className="profile-btn btn-secondary btn-xl">
            {getInitials(name)}
          </button>
          <h3 className="profile-name">{name}</h3>
          <p>{email}</p>
          <div className="edit-btn">
            <a
              href="#editintro"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-pencil" /> Edit_Intro
            </a>
          </div>
          <EditIntro name={name} email={email} closeModal={this.closeModal} />
        </div>
        <div className="profile-detail">
          <div className="about-heading">
            <h5>About</h5>
          </div>
          <div className="about-pen-icon">
            <div>
              <a href="#editdetail" data-toggle="modal" data-target="#Modal">
                <i className="fa fa-pencil" />
              </a>
              <AboutUser
                userAbout={this.state.userAbout}
                closeModal={this.closeModal}
              />
            </div>
          </div>
        </div>
        <div className="user-about-info">
          <textarea
            rows="5"
            placeholder="Tell us about Who you are..."
            value={this.state.userAbout}
            className="about"
            maxLength="25"
            readOnly={this.state.readOnly}
          />
        </div>
      </Fragment>
    );
  }
}
export default LeftPane;
