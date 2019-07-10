import React, { Component } from "react";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div id="#sidebar" className="sidebar-container">
        <nav className="sidenav">
          <div className="btn-div">
            <button className="btn">
              <i className="fa fa-angle-double-left fa-lg" />
            </button>
          </div>
          <ul className="list-unstyled components">
            <li>
              <a href="/home">
                <i className="fa fa-book mr-2" /> Courses
              </a>
            </li>
            <li>
              <a href="/home">
                <i className="fa fa-language mr-2" /> Languages
              </a>
            </li>
            <li>
              <a href="/home">
                <i className="fa fa-question mr-2 fa-lg" /> Genral Questions
              </a>
            </li>
            <li>
              <a href="/home">
                <i className="fa fa-file-text-o mr-2" /> Analytical Questions
              </a>
            </li>
            <li>
              <a href="/home">
                <i className="fa fa-file mr-2" /> CV Templates
              </a>
            </li>
            <li>
              <a href="/home">
                <i className="fa fa-lightbulb-o mr-3 fa-lg" /> Interview Tips
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Sidebar;
