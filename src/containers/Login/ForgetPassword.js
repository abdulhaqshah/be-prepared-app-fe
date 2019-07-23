import React, { Component } from "react";
import ReactNotification from "react-notifications-component";
import SimpleReactValidator from "simple-react-validator";
import Footer from "../../components/Footer";
import "./ForgetPassword.scss";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      newPassword: "",
      confirmPassword: ""
    };
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  };

  render() {
    return (
      <div>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="d-flex justify-content-center container">
          <div className="row">
            <div className="form-inner-container">
              <h1 className="heading" align="center">
                Forget Password
              </h1>
              <form
                onSubmit={this.submitForm}
                ref={ref => (this.formRef = ref)}
              >
                <div>
                  <label className="labels vertical-spacing">
                    New Password
                    <span className="login-required-indicator">*</span>
                  </label>
                  <br />
                  <input
                    className="login-field"
                    name="password"
                    type="password"
                    onChange={this.handleUserInput}
                  />
                  <div className="login-error-msg">
                    {this.validator.message(
                      "newPassword",
                      this.state.newPassword,
                      "required"
                    )}
                  </div>
                </div>

                <div>
                  <label className="labels vertical-spacing">
                    Confirm Password
                    <span className="login-required-indicator">*</span>
                  </label>
                  <br />
                  <input
                    autoComplete="off"
                    className="login-field"
                    name="password"
                    type="password"
                    onChange={this.handleUserInput}
                  />
                  <div className="login-error-msg">
                    {this.validator.message(
                      "confirmPassword",
                      this.state.confirmPassword,
                      "required"
                    )}
                  </div>
                </div>
                <div>
                  <button
                    className="login-button"
                    name="loginBtn"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ForgetPassword;
