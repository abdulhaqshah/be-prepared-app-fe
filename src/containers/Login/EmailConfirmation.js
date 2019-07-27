import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import Footer from "../../components/Footer";
import { addNotification } from "../../utilities";
import "./EmailConfirmation.scss";
import API from "../../api/index";

class EmailConfirmation extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      email: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationRef = this.props.notificationRef;
    this.formRef = null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  }

  submitForm = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      API.emailConfirmation(this.state.email, result => {
        if (result.status === "200") {
          this.props.getEmail(this.state.email);
          addNotification(
            this.notificationRef,
            "Success",
            "success",
            result.message
          );
          this.props.updatePassword();
        } else if (result.status === "400" || result.status === "404") {
          addNotification(
            this.notificationRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          let error = API.getErrorMessage(result.message);
          addNotification(this.notificationRef, "Error", "danger", error);
        }
      }).catch = error => {
        addNotification(this.notificationRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <div className="forgetPassword-container">
          <div className="forgetPassword-inner-container">
            <h1 className="heading" align="center">
              Email Confirmation
            </h1>
            <form onSubmit={this.submitForm} ref={ref => (this.formRef = ref)}>
              <div>
                <label className="labels">
                  Email
                  <span className="forgetPassword-required-indicator">*</span>
                </label>
                <br />
                <input
                  className="forgetPassword-field"
                  name="email"
                  onChange={this.handleUserInput}
                />
                <div className="forgetPassword-error-msg">
                  {this.validator.message(
                    "email",
                    this.state.email,
                    "required"
                  )}
                </div>
              </div>
              <div>
                <button
                  className="forgetPassword-button"
                  name="forgetPasswordBtn"
                  type="submit"
                >
                  Confirm Email
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default EmailConfirmation;
