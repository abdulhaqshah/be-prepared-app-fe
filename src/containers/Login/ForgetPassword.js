import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Footer from "../../components/Footer";
import { FORGET_PASSWORD } from "../../constants/index";
import "./ForgetPassword.scss";
// import API from "../../api/index";

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

  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { email } = this.state;
      const data = {
        email
      };
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  } 

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
