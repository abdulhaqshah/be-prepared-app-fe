import React, { Component } from "react";
import EmailConfirmation from "./EmailConfirmation";
import UpdatePassword from "./UpdatePassword";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      updatePassword: false,
      emailConfirmation: true
    };
    this.notificationRef = this.props.notificationRef;
  }

  getEmail = email => {
    this.setState({
      email: email
    });
  };
  setUpdatePassword = () => {
    this.setState({
      updatePassword: true
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
            updatePassword={this.setUpdatePassword}
            getEmail={this.getEmail}
            notificationRef={this.notificationRef}
          />
        ) : null}
        {this.state.updatePassword ? (
          <UpdatePassword
            email={this.state.email}
            notificationRef={this.notificationRef}
          />
        ) : null}
      </div>
    );
  }
}
export default Password;
