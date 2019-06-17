import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../constants";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-lg">
        <div className="logo-div">
          <Link className="navigation-logo" to={HOME}>
            Be Prepared
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="d-lg-flex flex-row-reverse">
            <div className="login-btn">
              <Link to={this.props.redirectTo}>
                <button className="btn-secondary btn-login">
                  {this.props.btnName}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
