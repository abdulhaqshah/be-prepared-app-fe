import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as auth from "../../services/Session";
import { HOME, PROFILE } from "../../constants";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      btnName:
        window.location.pathname === "/login"
          ? this.props.signupBtn
          : this.props.loginBtn
    };
    this.onLogout = this.onLogout.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onLogout() {
    auth.clearSession();
    this.props.history.push(HOME);
  }

  onBtnClick = () => {
    if (window.location.pathname === "/login") {
      this.props.history.push(this.props.signupRoute);
      this.setState({
        btnName: this.props.loginBtn
      });
    } else {
      this.props.history.push(this.props.loginRoute);
      this.setState({
        btnName: this.props.signupBtn
      });
    }
  };

  render() {
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
                <button
                  className="btn-secondary btn-login"
                  onClick={this.onBtnClick}
                >
                  {this.state.btnName}
                </button>
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
                  <a className="nav-link active" href={HOME}>
                    PRACTICE
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mr-3 ml-3">
                <li className="nav-item">
                  <form className="form-inline md-form form-sm mt-0">
                    <i className="fa fa-search" />
                    <input
                      className=" form-control-sm ml-3 w-75"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </li>
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
                    <i className="fa fa-user-o fa-lg ml-1" /> {this.state.name}
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
    user: state.user.user
  };
};
export default withRouter(connect(mapStateToProps)(Navbar));
