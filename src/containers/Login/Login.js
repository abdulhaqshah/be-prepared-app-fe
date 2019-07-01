import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import addNotification from "../../utilities";
import { SINGUP, DASHBOARD } from "../../constants";
import * as auth from "../../services/Session";
import API from "../../api";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    // debugger;

    this.validator = new SimpleReactValidator();
    this.state = {
      email: "",
      password: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
  }

  componentDidMount() {
    const flag = this.props.location.state;
    if (flag === true) {
      addNotification(
        this.notificationDOMRef,
        "Success",
        "success",
        "User has been created Successfuly"
      );
    }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { email, password } = this.state;
      const data = {
        email,
        password
      };
      API.userLogin(data, result => {
        if (result.status === "200") {
          auth.setItem("uuid", result.data.user.uuid);
          auth.setItem("token", result.data.token);
          auth.setItem("name", result.data.user.name);
          auth.setItem("email", result.data.user.email);
          auth.setItem("img", result.data.user.image);

          //Form reset
          this.formRef.reset();
          this.props.history.push(DASHBOARD);
        } else if (
          result.status === "404" ||
          result.status === "403" ||
          result.status === "500"
        ) {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "warning",
            "Somgthing went wrong"
          );
        }
      }).catch = error => {
        addNotification(this.notificationDOMRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <Header btnName="SignUp" redirectTo={SINGUP} />
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
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
                <button className="login-button" name="loginBtn" type="submit">
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
export default Login;
