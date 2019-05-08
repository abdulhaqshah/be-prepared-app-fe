import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./SignUp.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import postUserData from "../../api";
import { LOGIN } from "../../constants";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      //This rule is for confirm password
      validators: {
        cp: {
          // name the rule
          message: "The :attribute does not match.",
          rule: (val, params, validator) => {
            return Boolean(val) ? val === params[0] : null;
          },
          required: true // optional
        }
      }
    });
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
  }
  addNotification(title, type, msg) {
    this.notificationDOMRef.current.addNotification({
      title: title,
      message: msg,
      type: type,
      insert: "top",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 3000 },
      dismissable: { click: true }
    });
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      //post data
      let { name, email, password } = this.state;
      const data = {
        name,
        email,
        password
      };
      postUserData(data, result => {
        if (result.status === "201") {
          this.addNotification("Success", "success", result.message);
          this.props.history.push(LOGIN);
        } else if (result.status === "400") {
          this.addNotification("Error", "danger", result.message);
        } else {
          this.addNotification("Error", "warning", "Somthing went wrong");
        }
      }).catch = error => {
        console.log(error);
      };
      //Form reset
      this.formRef.reset();
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <Header />
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
                    "min:3|max:25"
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
                  // type="email"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "email",
                    this.state.email,
                    "required|email"
                  )}
                </div>
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
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
                  className="field"
                  name="confirmPassword"
                  type="password"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "confirmPassword",
                    this.state.confirmPassword,
                    "cp:" + this.state.password
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
