import React, { Component } from "react";
import "./Tutorial.scss";
class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="text-muted font-weight-bold ml-5 mb-5 mt-3">
          <h5>
            Tutorials
          </h5>
        </div>
        <div>
          <div className="tutorial-container">
            <div className="interview-prep-tutorial">
              <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
                <div
                  className="card"
                  style={{ width: "22rem", height: "13rem" }}
                >
                  <div className="card-body">
                    <p className="text-muted">INTERVIEW PREPARATION</p>
                    <h2 className="card-title font-weight-bold">
                      Interview Preparation Kit
                    </h2>
                    <p className="card-text text-muted">
                      challenges based on learnings from 1000+ companies
                      to help you prepare
                    </p>
                    <a href="#" className="font-weight-bold">
                      View Tutorial
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="learn-code">
              <div className="tutorial-card shadow-lg ml-5 mr-2 mb-5">
                <div
                  className="card"
                  style={{ width: "22rem", height: "13rem" }}
                >
                  <div className="card-body">
                    <p className="text-muted">30 DAYS OF CODE</p>
                    <h2 className="card-title font-weight-bold">
                      Learn to code in 30 days
                    </h2>
                    <p className="card-text text-muted">
                      Learn if-else statements, recursion, data, structure, oop
                      and more.
                    </p>
                    <a href="#" className="font-weight-bold">
                      Start Tutorial
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics">
              <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
                <div
                  className="card"
                  style={{ width: "22rem", height: "13rem" }}
                >
                  <div className="card-body">
                    <p className="text-muted">TUTORIAL</p>
                    <h2 className="card-title font-weight-bold">
                      10 Days of Statistics
                    </h2>
                    <p className="card-text text-muted">
                      Learn Probabilitym distribution, regression and more!{" "}
                    </p>
                    <a href="#" className="font-weight-bold">
                      Start Tutorial
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="javascript">
            <div className="tutorial-card shadow-lg  ml-5 mb-5">
              <div className="card" style={{ width: "22rem", height: "13rem" }}>
                <div className="card-body">
                  <p className="text-muted">TUTORIAL</p>
                  <h2 className="card-title font-weight-bold">
                    10 Days of Javascript
                  </h2>
                  <p className="card-text text-muted">
                    Learn and improve your Javascript fundamentals"
                  </p>
                  <a href="#" className="font-weight-bold">
                    Start Tutorial
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
