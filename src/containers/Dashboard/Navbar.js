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
    return (
      <nav className="navbar navbar-expand-xl fixed-top navbar-dark bg-dark shadow-lg">
        <div>
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
          <ul className="navbar-nav mr-auto mt-2 ml-3">
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
          <ul className="navbar-nav  mt-1 mr-3 ml-3">
            <li className="nav-item">
              <form className="form-inline md-form form-sm mt-0">
                <i className="fa fa-search mr-2" />
                <input
                  className=" form-control-sm"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
            <li className="nav-item ml-1">
              <a className="nav-link" href={HOME}>
                <i className="fa fa-comment-o fa-lg" />
              </a>
            </li>
            <li className="nav-item ml-1">
              <a className="nav-link " href={HOME}>
                <i className="fa fa-bell-o fa-lg" />
              </a>
            </li>
            <li>
              <div className="dropdown myDropdown mt-1 shadow-lg mr-5">
                <a
                  href="./home"
                  className="dropdown-toggle"
                  id="dropdownMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-o fa-lg ml-1" /> {this.props.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <a href="./home" className="dropdown-item">
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
                  <a
                    href="./home"
                    className="dropdown-item"
                    onClick={this.onLogout}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
