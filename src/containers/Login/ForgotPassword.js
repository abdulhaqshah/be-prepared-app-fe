import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { user } from "../../store/actions/Actions";
import EmailConfirmation from "./EmailConfirmation";
import UpdatePassword from "./UpdatePassword";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      updatePassword: false,
      emailConfirmation: true
    };
    this.notificationRef = this.props.notificationRef;
    this.props.setPathname(this.props.location.pathname);
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
const mapStateToProps = state => {
  return {
    pathname: state.user.pathname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPathname: path => {
      dispatch(user(path));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPassword)
);
