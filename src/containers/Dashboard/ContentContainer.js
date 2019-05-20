import React, { Component } from "react";
import {
  Container,
  Button,
  lightColors,
  darkColors
} from "react-floating-action-button";
import "./ContentContainer.scss"

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.takeQuiz = this.takeQuiz.bind(this);
  }
  takeQuiz = () => {};
  render() {
    return (
      <div className="content-container">
        <p>This is main content container</p>
        <Container>
          <Button
            tooltip="Take Quiz!"
            icon="fa fa-pencil "
            styles={{
              backgroundColor: darkColors.blue,
              color: lightColors.white
            }}
            onClick={this.takeQuiz}
          />
        </Container>
      </div>
    );
  }
}
export default ContentContainer;
