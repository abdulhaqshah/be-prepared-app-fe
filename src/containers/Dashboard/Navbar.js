import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants";
import * as auth from "../../services/Session";
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

  render() {
    debugger;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div>
          {/* <Link to={HOME}> */}
            <a href="./" className="navigation-logo">
            Be Prepared
            </a>
          {/* </Link> */}
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
            <li className="nav-item ml-1">
              <a className="nav-link" href={HOME}>
                COMPETE
              </a>
            </li>
            <li className="nav-item ml-1">
              <a className="nav-link" href={HOME}>
                JOBS
              </a>
            </li>
            <li className="nav-item ml-1">
              <a className="nav-link" href={HOME}>
                LEADERBOARD
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
            <li className="nav-item dropdown">
              <a
                href="."
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user-o fa-lg ml-1" /> {this.props.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a href="./profile" className="dropdown-item">
                  Profile
                </a>
                <a href="./home" className="dropdown-item">
                  Settings
                </a>
                <a href="./home" className="dropdown-item">
                  Bookmarks
                </a>
                <a href="./home" className="dropdown-item">
                  Network
                </a>
                <a href="./home" className="dropdown-item">
                  Submissions
                </a>
                <a href="./home" className="dropdown-item">
                  Administration
                </a>
                <a href="." className="dropdown-item" onClick={this.onLogout}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
