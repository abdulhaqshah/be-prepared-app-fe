import React, { Component, Fragment } from "react";
import * as auth from "../../services/Session";
import { connect } from "react-redux";
import { HOME, PROFILE, LOGIN, SINGUP } from "../../constants";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    auth.clearSession();
    this.props.history.push(HOME);
  }

  getBtnName = path => {
    if (path === LOGIN) return this.props.signupBtn;
    else return this.props.loginBtn;
  };

  getRouteName = path => {
    if (path === LOGIN) return SINGUP;
    else return LOGIN;
  };

  render() {
    const name = auth.getItem("name");
    const token = auth.getItem("token");
    if (token === null) {
      return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-lg">
          <div className="logo-div">
            <a href={HOME} className="navigation-logo">
              Be Prepared
            </a>
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
                <Link
                  to={this.getRouteName(this.props.pathname)}
                  className="btn-secondary btn-login"
                >
                  {this.getBtnName(this.props.pathname)}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark shadow-lg">
            <div>
              <Link to={HOME} className="navigation-logo">
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
              <ul className="navbar-nav mr-auto ml-3">
                <li className="nav-item active">
                  <Link to={HOME} className="nav-link active">
                    Dashboard
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mr-3 ml-3">
                <li className="nav-item dropdown mr-5">
                  <a
                    href="."
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user-o fa-lg ml-1" /> {name}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to={PROFILE} className="dropdown-item">
                      Profile
                    </Link>

                    <div className="dropdown-item" onClick={this.onLogout}>
                      Logout
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    pathname: state.getPathname.pathname
  };
};
export default withRouter(connect(mapStateToProps)(Navbar));
