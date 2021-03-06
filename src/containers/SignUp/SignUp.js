import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import Footer from "../../components/Footer";
import { addNotification } from "../../utilities";
import { LOGIN } from "../../constants";
import { getPathname } from "../../store/actions/Actions";
import API from "../../api";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      validators: {
        cp: {
          message: "The :attribute does not match.",
          rule: (val, params, validator) => {
            return Boolean(val) ? val === params[0] : null;
          },
          required: true
        },
        password: {
          message:
            "The :attribute must have minimum 8 characters with 1 uppercase letter, 1 special character and 1 numeric",
          rule: (val, params, validator) => {
            return validator.helpers.testRegex(
              val,
              /^(?=.*[0-9])(?=.*[a-z])*(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
            );
          },
          required: true
        }
      }
    });
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      param: true
    };
    this.props.setPathname(this.props.location.pathname);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.notificationRef = this.props.notificationRef;
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
          this.props.history.push(LOGIN, this.state.param);
        } else if (
          result.status === "400" ||
          result.status === "403" ||
          result.status === "500"
        ) {
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
  }

  render() {
    return (
      <div>
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
                    "required|password"
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
const mapStateToProps = state => {
  return {
    pathname: state.getDashboardData.pathname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPathname: path => {
      dispatch(getPathname(path));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
