import React, { Component } from "react";
import "./QuizPage.scss";

class QuizQuestions extends Component {
  componentDidMount() {
    const pathname = this.props.history.location.pathname;
    var id = pathname.split("/");
    this.props.getQuizes(id[3]);
  }
  render() {
    // const question = this.props.question[0];
    // const options = question.map((option, index) => {
    //   return (
    //     <div className="course-name" key={index}>
    //       <li>{option.option}</li>
    //     </div>
    //   );
    // });
    // console.log(this.props.question[0]);
    debugger;
    return (
      <div className="course-content-container">
        <div className="courses-detail-card">
          <div className="card shadow-lg">
            <div className="card-body" />
            <p>{this.props.questions[0].question} </p>
          </div>
          <div className="options">{/* <ul>{options}</ul> */}</div>
        </div>
      </div>
    );
  }
}

export default QuizQuestions;
