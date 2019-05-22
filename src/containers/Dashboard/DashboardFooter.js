import React, { Component } from "react";
import "./DashboardFooter.scss";

class DashboardFooter extends Component {
  render() {
    return (
      <div class="jumbotron">
        <div className="container text-center">
          Made with&nbsp;
          <i className="fa fa-heart pulse" />
          <span className="gainlo">&nbsp;by Gsquad Team</span>
        </div>
        <div>
          <hr />
        </div>
        <div class="text-muted">
          <div>
            <span>
              copyright <i className="fa fa-copyright mr-1 " /> 2019 BePrepared
            </span>
            <span className="links-right">
              <a class="mr-2" href="/helpCenter">
                Help Center
              </a>
              <span class="mr-2">|</span>
              <a class="mr-2" href="/jobs">
                Jobs
              </a>
              <span class="mr-2">|</span>
              <a class="mr-2" href="/terms">
                Terms
              </a>
              <span class="mr-2">|</span>
              <a class="mr-2" href="/privacy">
                Privacy
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardFooter;
