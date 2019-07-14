import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Footer from "../../components/Footer";
import { addNotification } from "../../utilities";
import { LOGIN } from "../../constants";
import API from "../../api";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator(
      { autoForceUpdate: this },
      {
        validators: {
          cp: {
            message: "The :attribute does not match.",
            rule: (val, params, validator) => {
              return Boolean(val) ? val === params[0] : null;
            },
            required: true
          }
        }
      }
    );
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
      let { name, email, password } = this.state;
      const data = {
        name,
        email,
        password
      };
      API.userRegister(data, result => {
        if (result.status === "201") {
          this.formRef.reset();
          this.validator.hideMessages();
          this.props.history.push(LOGIN);
        } else if (
          result.status === "400" ||
          result.status === "403" ||
          result.status === "500"
        ) {
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
            result.message
          );
        }
      }).catch = error => {
        addNotification(this.notificationDOMRef, "Error", "warning", error);
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
        <div className="signup-container">
          <div className="inner-container">
            <h1 className="heading" align="center">
              Sign Up
            </h1>
            <form onSubmit={this.submitForm} ref={ref => (this.formRef = ref)}>
              <div>
                <label className="labels vertical-spacing"> Your name </label>
                <br />
                <input
                  className="field"
                  name="name"
                  type="text"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "name",
                    this.state.name,
                    "required|min:3|max:25"
                  )}
                </div>
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Email <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="email"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "email",
                    this.state.email,
                    "required|email|max:30"
                  )}
                </div>
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  autoComplete="off"
                  className="field"
                  name="password"
                  type="password"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "password",
                    this.state.password,
                    "required|min:6|max:20"
                  )}
                </div>
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Confirm Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  autoComplete="off"
                  className="field"
                  name="confirmPassword"
                  type="password"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "confirmPassword",
                    this.state.confirmPassword,
                    "required|cp:" + this.state.password
                  )}
                </div>
              </div>
              <div className="term-conditions">
                By clicking 'Create account', you agree to our Terms and
                Conditions and acknowledge that you have read our Privacy Policy
                and Disclosure Guidelines.
              </div>
              <div>
                <button className="button" name="signUpBtn" type="submit">
                  Create Account
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
export default SignUp;
