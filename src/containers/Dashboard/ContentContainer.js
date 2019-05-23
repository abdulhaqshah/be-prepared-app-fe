import React, { Component } from "react";
import "./ContentContainer.scss";
import Card from "./Card";
import Footer from "../../components/Footer";
import Tutorial from "../Dashboard/Tutorial";

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const link1 = "View Tutorial";
    const link2 = "Start Tutorial";
    const para1 =
      "curated challenges and tips based on learnings from 1000+ companies to help you prepare";
    const para2 =
      "Learn if-else statements, recursion, data, structure, oop and more.";
    const para3 = "Learn Probabilitym distribution, regression and more!";
    const para4 = "Learn and improve your Javascript fundamentals";
    const title1 = "INTERVIEW PREPARATION";
    const title2 = "30 DAYS OF CODE";
    const title3 = "TUTORIAL";
    const heading1="Interview Preparation Kit"
    const heading2="Learn to code in 30 days"
    const heading3="10 Days of Statistics"
    const heading4="10 Days of Javascript"

    return (
      <div className="content-container">
        <header>
          <div className="ml-5 font-weight-bold text-muted">
            <span>practice</span>
          </div>
          <div className="ml-5 font-weight-bold">
            <h5 className="heading">Dashboard</h5>
          </div>
        </header>
        <div className="main-container">
          <h5 className="ml-5 mb-4 font-weight-bold">Your Skills</h5>

          <div className="interview-card1 shadow-lg mr-4 ml-5">
            <div className="card" style={{ width: "35rem", height: "15rem" }}>
              <div className="card-body">
                <p className="text-muted">INTERVIEW PREPARATION</p>
                <h2 className="card-title">Interview Preparation Kit</h2>
                <p className="card-text text-muted">
                  curated challenges and tips based on learnings from 1000+
                  compaanies to help you prepare for your upcoming interviews.
                </p>
                <a href="#" className="btn shadow-lg btn-success btn-lg ">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="interview-card2 shadow ml-5 ">
            <div className="card" style={{ width: "35rem", height: "15rem" }}>
              <div className="card-body">
                <div className="icon-div">
                  <i className="fa fa-envelope-o fa-lg" />
                </div>
                <h3 className="card-title">Confirm your email address </h3>
                <p className="card-text ">
                  please check your inbox. We've sent a link to confirm your
                  email address. Once you confir, you will be able to access all
                  the features of out site, including
                  <b> Jobs, Leaderboard, Recommendations and more.</b>
                </p>
                <a href="#" className="btn shadow-lg btn-success btn-lg ">
                  Resend Confirmation Email
                </a>
              </div>
            </div>
          </div>
          <div className="interview-card3 shadow-lg ml-5 mt-5">
            <div
              className="card-div"
              className="card"
              style={{ width: "35rem", height: "15rem" }}
            >
              <div className="card-body">
                <p className="text-muted">PROBLEM SOLVING</p>
                <h2 className="card-title">Problem Solving</h2>
                <div className="progress-div">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: " 25%" }}
                    />
                  </div>
                </div>

                <a href="#" className="btn shadow-lg btn-outline-success btn-lg">
                  Continue Practice
                </a>
              </div>
            </div>
          </div>

          <h5 className="text-muted ml-5 mb-5 mt-5">
            Explore BePrepared Skills
          </h5>

          <div className="card-container ml-5">
            <div className="courses shadow-lg mr-4 mb-5">
              <Card title="POBLEM SOLVING" />
            </div>
            <div className="languages shadow-lg ml-5 mb-5">
              <Card title="LANGUAGES" />
            </div>
            <div className="specialized-skills shadow-lg mr-5 mb-5">
              <Card title="SPECIALIZED SKILLS " />
            </div>
          </div>
          <h5 className="text-muted ml-5 mb-5 mt-3">Tutorials</h5>

          <div className="tutorial-container ml-5">
            <div className="tutorial1 mr-4 mb-5">
              <Tutorial heading={heading1} title={title1} para={para1} link={link1} />
            </div>
            <div className="tutorial2 ml-5 mr-5 mb-5">
              <Tutorial heading={heading2} title={title2} para={para2} link={link2} />
            </div>
            <div className="tutorial3 mr-5 mb-5">
              <Tutorial heading={heading3} title={title3} para={para3} link={link2} />
            </div>
            <div className="tutorial4 mb-5">
              <Tutorial heading={heading4} title={title3} para={para4} link={link2} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContentContainer;
