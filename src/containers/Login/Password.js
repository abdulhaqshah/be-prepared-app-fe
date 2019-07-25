import React, { Component } from "react";
import EmailConfirmation from "./EmailConfirmation";
import UpdatePassword from "./UpdatePassword";
import { LOGIN } from "../../constants";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      updatePassword: false,
      emailConfirmation: true
    };
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
    // this.props.history.push(LOGIN);
    return (
      <div>
        {this.state.emailConfirmation ? (
          <EmailConfirmation
            updatePassword={this.setUpdatePassword}
            getEmail={this.getEmail}
          />
        ) : null}
        {this.state.updatePassword ? (
          <UpdatePassword email={this.state.email} />
        ) : null}
      </div>
    );
  }
}
export default Password;
