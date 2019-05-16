import React, { Component } from "react";
import "./Footer.scss";

class DashboardFooter extends Component {
  render() {
    return (
      <div class="jumbotron">
         <div class="jumborton" className="container text-center">Made with&nbsp;
                <i className="fa fa-heart pulse"></i>
                <span className="gainlo">&nbsp;by Gsquad Team
                </span>
            </div>
        <p class="lead">
        <span>
        At BePrepared, our mission is to help you improve yourself and land your dream job.
        We have a sizeable repository of interview resources for many companies.In the past 
        few years, our users have lamded jobs at top companies around world.
        </span>
        </p>
      </div>
    );
  }
}

export default DashboardFooter;
