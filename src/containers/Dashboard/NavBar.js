import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants";
import "./Navbar.scss";
import SideBar from "./SideBar";

class NavBar extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-lg">
        <button
          type="button"
          data-toggle="collapse"
          id="sidebarCollapse"
          class="btn"
          aria-expanded="false"
          aria-controls="collapseExample"
          href="#collapseExample"
        >
          <i class="fa fa-bars fa-2x" />
        </button>
        <div class="collapse" id="collapseExample">
        <SideBar/>
        </div>
        <div>
          <Link className="navigation-logo" to={HOME}>
            Be Prepared
          </Link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto mt-2 navbar-right">
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
