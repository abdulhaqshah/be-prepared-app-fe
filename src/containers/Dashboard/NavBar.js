import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants";
import "./Navbar.scss";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div>
          <Link className="navigation-logo" to={HOME}>
            Be Prepared
          </Link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item ">
              <a class="nav-link" href={HOME}>
                Blog 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={HOME}>
                FAQ
              </a>
            </li>
          </ul>
          <Link to={HOME}>
          <button type="button" class="btn btn-secondary btn-lg">
            Logout
          </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
