import React, { Component, Fragment } from "react";
import EditIntro from "./EditIntro";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification, getInitials } from "../../utilities/index";
import * as auth from "../../services/Session";
import "./LeftPanel.scss";
import AboutUser from "./AboutUser";

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true,
      open: true
    };
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
  }

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });

    addNotification(
      this.notificationDOMRef,
      "success",
      "success",
      "User has been updated"
    );
    this.setState({ open: true });
  };

  getAboutValue = about => {
    return about === "" ? "Tell us about yourself . . ." : about;
  };

  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");
    const about = auth.getItem("about");

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
              href=" "
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={this.openModal}
            >
              <i className="fa fa-pencil" /> Edit_Intro
            </a>
          </div>
          {this.state.open ? (
            <EditIntro name={name} email={email} closeModal={this.closeModal} />
          ) : null}
        </div>

        <div className="profile-detail">
          <div className="about-heading">
            <h5>About</h5>
          </div>
          <div className="about-pen-icon">
            <div>
              <a
                href=" "
                data-toggle="modal"
                data-target="#Modal"
                onClick={this.openModal}
              >
                <i className="fa fa-pencil" />
              </a>
              {this.state.open ? (
                <AboutUser about={about} closeModal={this.closeModal} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="user-about-info">
          <p>{this.getAboutValue(about)}</p>
        </div>
      </Fragment>
    );
  }
}
export default LeftPane;
