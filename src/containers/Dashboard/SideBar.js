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
    <p>
      Dummy Heading
    </p>
    <li>
      <a href="/home">Courses</a>
    </li>
    <li>
      <a href="/home">Languages</a>
    </li>
    <li>
      <a href="/home">Genral Questions</a>
    </li>
    <li>
      <a href="/home">Analytical Questions</a>
    </li>
    <li>
      <a href="/home">CV Templates</a>
    </li>
    <li>
      <a href="/home">Interview Tips</a>
    </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;

