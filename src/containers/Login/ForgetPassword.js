import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Footer from "../../components/Footer";
import { addNotification } from "../../utilities";
import "./ForgetPassword.scss";
import API from "../../api/index";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      email: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  }

  submitForm = e => {
    debugger;
    e.preventDefault();
    if (this.validator.allValid()) {
      let { email } = this.state;
      const data = {
        email
      };
      API.emailConfirmation(data, result => {
        debugger;
        if (result.status === "200") {
          addNotification(
            this.notificationDOMRef,
            "Success",
            "success",
            result.message
          );
          this.formRef.reset();
        } else if (result.status === "400" || result.status === "404") {
          console.log("error 404");
          addNotification(
            this.notificationDOMRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          let error = API.getErrorMessage(result.message);
          addNotification(this.notificationDOMRef, "Error", "danger", error);
        }
      }).catch = error => {
        addNotification(this.notificationDOMRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="forgetPassword-container">
          <div className="forgetPassword-inner-container">
            <h1 className="heading" align="center">
              Forget Password
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
export default ForgetPassword;
