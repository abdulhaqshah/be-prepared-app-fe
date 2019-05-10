import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HOME } from "../../constants";
import postUserData from "../../api";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      email: "",
      password: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
  }
  addNotification(title, type, message) {
    this.notificationDOMRef.current.addNotification({
      title,
      message,
      type,
      insert: "top",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 300 },
      dismissable: { click: true }
    });
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      alert("Successfully Login");
      //post data
      var { email, password } = this.state;
      const data = {
        email,
        password
      };
      postUserData(data, result => {
        if (result.status === "200") {
          //Form reset
          this.formRef.reset();
          this.addNotification("Success", "success", result.message);
          this.props.history.push(HOME);
        }
      }).catch = error => {
        this.addNotification("Error", "warning", error);
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
        <Header />
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
                  type="email"
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
