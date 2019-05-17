import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants";
import "./Navbar.scss";
import SideBar from "./SideBar";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () =>{
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-lg">
        <button
          class="btn"
          onClick={this.toggle}
        >
          <i class="fa fa-bars fa-2x" />
        </button>
        <div>
          {
            this.state.show && ( <SideBar />)
          } 
        </div>
        <div>
          <Link className="navigation-logo" to={HOME}>
            Be Prepared
          </Link>
        </div>
        <div class=" navbar-collapse">
          <ul class="navbar-nav mr-auto mt-2 ml-3">
            <li class="nav-item">
              <a class="nav-link " href={HOME}>
                Blog
              </a>
            </li>
            <li class="nav-item ml-3">
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
