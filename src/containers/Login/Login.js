import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import "react-notifications-component/dist/theme.css";
import Footer from "../../components/Footer";
import { getUserData } from "../../store/actions/Actions";
import { addNotification } from "../../utilities";
import { DASHBOARD } from "../../constants";
import * as auth from "../../services/Session";
import "./Login.css";
import API from '../../api/index'

class Login extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      email: "",
      password: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationRef = this.props.notificationRef;
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "200") {
      const { uuid, name, email, about, img } = nextProps.user.user;
      auth.setItem("uuid", uuid);
      auth.setItem("name", name);
      auth.setItem("email", email);
      auth.setItem("about", about ? about : "");
      auth.setItem("img", img);
      auth.setItem("token", nextProps.user.token);
      this.formRef.reset();
      this.validator.hideMessages();
      this.props.history.push(DASHBOARD);
    } else if (
      nextProps.status === "404" ||
      nextProps.status === "403" ||
      nextProps.status === "500"
    ) {
      addNotification(this.notificationDOMRef, "Error", "danger", nextProps.message);
    } else {
      let error = API.getErrorMessage(nextProps.message)
      addNotification(this.notificationDOMRef, "Error", "danger", error);
    }
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { email, password } = this.state;
      const data = {
        email,
        password
      };
      this.props.getData(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <div className="login-container">
          <div className="login-inner-container">
            <h1 className="heading" align="center">
              Login
            </h1>
            <form onSubmit={this.submitForm} ref={ref => (this.formRef = ref)}>
              <div>
                <label className="labels vertical-spacing">
                  Email <span className="login-required-indicator">*</span>
                </label>
                <br />
                <input
                  className="login-field"
                  name="email"
                  onChange={this.handleUserInput}
                />
                <div className="login-error-msg">
                  {this.validator.message(
                    "email",
                    this.state.email,
                    "required"
                  )}
                </div>
              </div>

              <div>
                <label className="labels vertical-spacing">
                  Password <span className="login-required-indicator">*</span>
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
                    "password",
                    this.state.password,
                    "required"
                  )}
                </div>
              </div>
              <div>
                <button
                  className="login-button"
                  name="loginBtn"
                  type="submit"
                  onClick={this._changeState}
                >
                  LOGIN
                </button>
              </div>
              <div align="center">
                <a href="/forgetPassword">Forget Password</a>
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
    user: state.user.user,
    status: state.user.status,
    message: state.user.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: data => {
      dispatch(getUserData(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
