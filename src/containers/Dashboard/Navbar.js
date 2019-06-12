import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DASHBOARD } from "../../constants";
import * as auth from "../../services/Session";
import "./Navbar.scss";
class Navbar extends Component {
  logout = () => {
    auth.clearSession();
  };

  render() {
  
    return (
      <nav className="navbar navbar-expand-xl fixed-top navbar-dark bg-dark shadow-lg">
        <div className="logo-div">
          <Link className="navigation-logo" to={DASHBOARD}>
            Be Prepared
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <div className="links-div">
            <ul className="navbar-nav mr-auto mt-2 ml-3">
              <li className="nav-item">
                <a className="nav-link active" href={DASHBOARD}>
                  PRACTICE
                </a>
              </li>
              <li className="nav-item ml-1">
                <a className="nav-link" href={DASHBOARD}>
                  COMPETE
                </a>
              </li>
              <li className="nav-item ml-1">
                <a className="nav-link" href={DASHBOARD}>
                  JOBS
                </a>
              </li>
              <li className="nav-item ml-1">
                <a className="nav-link" href={DASHBOARD}>
                  LEADERBOARD
                </a>
              </li>
            </ul>
          </div>
          <div className="icons-div">
            <ul className="navbar-nav  mt-2 ml-5">
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

              <li className="nav-item ml-1">
                <a className="nav-link" href={DASHBOARD}>
                  <i className="fa fa-comment-o fa-lg" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href={DASHBOARD}>
                  <i className="fa fa-bell-o fa-lg" />
                </a>
              </li>
              <li className="nav-item ml-1">
                <a className="nav-link" onClick={this.logout}>
                  <i className="fa fa-user-o fa-lg mr-1" />
                  {this.props.name}
                  <i className="fa fa-angle-down ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
