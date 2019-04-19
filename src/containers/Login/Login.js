import React, { Component } from "react";
import "./Login.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: "",
      loginPass: ""
    };
    this.setLoginUserName = this.setLoginUserName.bind(this);
    this.setLoginPassword = this.setLoginPassword.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }
  setLoginUserName(event) {
    this.setState({ loginUserName: event.target.value });
  }
  setLoginPassword(event) {
    this.setState({ loginPass: event.target.value });
  }
  loginValidation(e) {
    e.preventDefault();
    if (this.state.loginUserName === "" || this.state.loginPass === "") {
      alert("All Feilds Required");
    } else {
      this.props.history.push("/Home");
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="login-outer-container">
          <div className="login-container">
            <h1 className="login-heading" align="center">
              Login
            </h1>{" "}
            <br />
            <label className="login-labels">UserName</label>
            <br />
            <input
              className="login-field"
              name="loginUserName"
              type="text"
              placeholder="UserName"
              onChange={this.setLoginUserName}
            />
            <br /> <br />
            <label className="login-labels">Password</label>
            <br />
            <input
              className="login-field"
              name="loginPassword"
              type="password"
              placeholder="Password"
              onChange={this.setLoginPassword}
            />
            <br /> <br /> 
            <button
              className="login-button"
              name="loginBtn"
              type="submit"
              onClick={this.loginValidation}
            >
              Login
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Login;
