import React, { Component } from "react";
import EmailConfirmation from "./EmailConfirmation";
import ResetPassword from "./ResetPassword";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetPassword: false,
      emailConfirmation: true
    };
  }

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
          <EmailConfirmation resetPassword={this.setResetPassword} />
        ) : null}
        {this.state.resetPassword ? <ResetPassword /> : null}
      </div>
    );
  }
}
export default Container;
