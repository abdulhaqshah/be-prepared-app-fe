import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./Login.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import postUserData from "../../api";
import { HOME } from "../../constants";
import Home from "../Home/Home";

class Login extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      email: "",
      password: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
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
      postUserData(data);
      //Form reset
      this.formRef.reset();
      this.props.history.push(Home);
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
        <div className="login-container">
          <div className="inner-container">
            <h1 className="heading" align="center">
              Login
            </h1>
            <form onSubmit={this.submitForm} ref={ref => (this.formRef = ref)}>
              <div>
                <label className="labels vertical-spacing">
                  Email <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="email"
                  type="email"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "email",
                    this.state.email,
                    "required|email"
                  )}
                </div>
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="password"
                  type="password"
                  onChange={this.handleUserInput}
                />
                <div className="error-msg">
                  {this.validator.message(
                    "password",
                    this.state.password,
                    "required|password"
                  )}
                </div>
              </div>
              <div>
                <button className="button" name="loginBtn" type="submit">
                  LOGIN
                </button>
              </div>
              <div align="center">
              <a 
              href="/forgetPassword">Forget Password</a>
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
