import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { HOME } from "../../constants";
import "./Sidebar.scss";

class SideBar extends Component {
  render() {
    return (
      <nav class="sidenav">
        <div class="sidebar-header">
          <h3>SideBar</h3>
        </div>
        <ul class="list-unstyled components">
          <li>
            <a href="/home">
              <i className="fa fa-book" /> Courses
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa fa-language" /> Languages
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa  fa-question" /> Genral Questions
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa  fa-file-text-o" /> Analytical Questions
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa  fa-file" /> CV Templates
            </a>
          </li>
          <li>
            <a href="/home">
              <i className="fa fa-lightbulb-o" /> Interview Tips
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
