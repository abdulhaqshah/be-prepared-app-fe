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
        <div align="center">
          <p class="lead text-center col-9 text-muted">
            <span>
              At BePrepared, our mission is to help you improve yourself and
              land your dream job. We have a sizeable repository of interview
              resources for many companies.In the past few years, our users have
              landed jobs at top companies around world.
            </span>
          </p>
        </div>
        <div className="icon-div" align="center">
          <i className="fa fa-facebook-official pl-5 fa-5x" />
          <i className="fa fa-apple pl-5 fa-5x" />
          <i className="fa fa-google pl-5 fa-5x" />
          <i className="fa fa-amazon pl-5 fa-5x" />
          <i className="fa fa-pinterest-square pl-5 fa-5x" />
        </div>
        <div className="icon-div" align="center">
          <i className="fa fa-youtube pl-5 fa-5x" />
          <i className="fa fa-linkedin-square pl-5 fa-5x" />
          <i className="fa fa-snapchat pl-5 fa-5x" />
        </div>
        <div className="hr-div">
          <hr class="style14" />
        </div>
        <div className="hr-div" align="center">
          <p class="lead text-center pl-5 col-6 text-muted">
            <span>
              If you are passionate about tackling some of the most interesting
              problems around,We would love to hear from you.
            </span>
          </p>
        </div>
        <div align="center">
          <a href="/home">
            Visit BePrepared <i className="fa fa-angle-double-right " />
          </a>
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
