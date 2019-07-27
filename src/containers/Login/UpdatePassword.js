import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import Footer from "../../components/Footer";
import { addNotification } from "../../utilities";
import API from "../../api/index";
import { LOGIN } from "../../constants";
import "./EmailConfirmation.scss";

class UpdatePassword extends Component {
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
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      email: this.props.email,
      password: "",
      confirmPassword: ""
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
      let { email, password } = this.state;
      const data = {
        email,
        password
      };
      API.updatePassword(data, result => {
        if (result.status === "200") {
          this.formRef.reset();
          addNotification(
            this.notificationRef,
            "Success",
            "success",
            result.message
          );
          this.props.history.push(LOGIN);
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
              Reset Password
            </h1>
            <form onSubmit={this.submitForm} ref={ref => (this.formRef = ref)}>
              <div>
                <div>
                  <label className="labels vertical-spacing">
                    New Password <span className="required-indicator">*</span>
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
                    Confirm Password
                    <span className="required-indicator">*</span>
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
                <button
                  className="forgetPassword-button"
                  name="forgetPasswordBtn"
                  type="submit"
                >
                  Reset
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
export default withRouter(UpdatePassword);
