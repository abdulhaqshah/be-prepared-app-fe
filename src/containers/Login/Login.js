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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        <div className="outer-container">
          <div className="container">
            <h1 className="heading" align="center">
=======
        <div className="login-outer-container">
          <div className="login-container">
            <h1 className="login-heading" align="center">
>>>>>>> a little bit  Modification has made in login page
              Login
            </h1>{" "}
            <br />
            <label className="login-labels">UserName</label>
            <br />
            <input
<<<<<<< HEAD
              className="field"
>>>>>>> Final login form
=======
              className="login-field"
>>>>>>> a little bit  Modification has made in login page
              name="loginUserName"
              type="text"
              placeholder="UserName"
              onChange={this.setLoginUserName}
            />
            <br /> <br />
<<<<<<< HEAD
<<<<<<< HEAD
            <label className="login-labels">Password</label>
            <br />
            <input
              className="login-field"
=======
            <label className="labels">Password</label>
            <br />
            <input
              className="field"
>>>>>>> Final login form
=======
            <label className="login-labels">Password</label>
            <br />
            <input
              className="login-field"
>>>>>>> a little bit  Modification has made in login page
              name="loginPassword"
              type="password"
              placeholder="Password"
              onChange={this.setLoginPassword}
            />
<<<<<<< HEAD
<<<<<<< HEAD
            <br /> <br /> 
            <button
              className="login-button"
=======
            <br /> <br /> <br />
            <button
              className="button"
>>>>>>> Final login form
=======
            <br /> <br /> 
            <button
              className="login-button"
>>>>>>> a little bit  Modification has made in login page
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
