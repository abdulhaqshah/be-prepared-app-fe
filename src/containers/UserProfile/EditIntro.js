import React, { Component, Fragment } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import addNotification from "../../utilities/index";
import * as auth from "../../services/Session";
import API from "../../api/index";
import "./EditIntro.scss";

class EditInto extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      name: "",
      email: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  submitForm(e) {
    e.preventDefault();
    const uuid = auth.getItem("uuid");
    if (this.validator.allValid()) {
      var { name, email } = this.state;
      const data = {
        name,
        email,
        uuid
      };

      API.updateData(data, result => {
        if (result.status === "200") {
          //Form reset
          this.formRef.reset();

          auth.setItem("name", result.data.name);
          auth.setItem("email", result.data.email);
          addNotification(
            this.notificationDOMRef,
            "success",
            "success",
            result.message
          );
        } else if (
          result.status === "404" ||
          result.status === "403" ||
          result.status === "500"
        ) {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "danger",
            result.message
          );
        } else if (result.status === "401") {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "warning",
            "Somgthing went wrong"
          );
        }
      }).catch = error => {
        addNotification(this.notificationDOMRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    const name = auth.getItem('name');
    const email = auth.getItem('email');
    return (
      <Fragment>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="container">
          <div className="header">
            <div className="heading">
              <h5>Edit Intro</h5>
            </div>
          </div>
          <form
            className="form"
            onSubmit={this.submitForm}
            ref={ref => (this.formRef = ref)}
          >
            <div className="feilds" />
            <div className="name">
              <label className="labels vertical-spacing">
                Name <span className="edit-required-indicator">*</span>
              </label>
              <br />
              <input
                defaultValue={name}
                className="edit-field"
                name="name"
                onChange={this.handleUserInput}
              />
              <div className="edit-error-msg">
                {this.validator.message("name", this.state.name, "required")}
              </div>
            </div>
            <div className="email-div">
              <label className="labels vertical-spacing">
                Email <span className="edit-required-indicator">*</span>
              </label>
              <br />
              <input
                defaultValue={email}
                className="edit-field"
                name="email"
                onChange={this.handleUserInput}
              />
              <div className="edit-error-msg">
                {this.validator.message("email", this.state.email, "required")}
              </div>
            </div>
            <div className="btns-div">
              <button
                className="btn btn-outline-success"
                name="cancelBtn"
                type="submit"
                onClick={this.props.closeModal}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                name="saveBtn"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default EditInto;
