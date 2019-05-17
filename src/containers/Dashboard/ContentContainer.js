import React, { Component } from "react";
import {
  Container,
  Button,
  lightColors,
  darkColors
} from "react-floating-action-button";

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.takeQuiz = this.takeQuiz.bind(this);
  }
  takeQuiz = () => {
 
  };
  render() {
    return (
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
    );
  }
}
export default ContentContainer;
