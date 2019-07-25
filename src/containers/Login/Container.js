import React, { Component } from "react";
import EmailConfirmation from "./EmailConfirmation";
import ResetPassword from "./ResetPassword";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      resetPassword: false,
      emailConfirmation: true
    };
  }

  getEmail = email => {
    this.setState({
      email: email
    });
  };
  setResetPassword = () => {
    this.setState({
      resetPassword: true
    });
    this.setEmailConfirmation();
  };

  setEmailConfirmation = () => {
    this.setState({
      emailConfirmation: false
    });
  };
  render() {
    return (
      <div>
        {this.state.emailConfirmation ? (
          <EmailConfirmation
            resetPassword={this.setResetPassword}
            getEmail={this.getEmail}
          />
        ) : null}
        {this.state.resetPassword ? (
          <ResetPassword email={this.state.email} />
        ) : null}
      </div>
    );
  }
}
export default Container;
