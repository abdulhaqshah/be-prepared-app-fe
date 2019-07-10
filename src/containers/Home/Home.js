import React, { Component } from "react";
import Section from "./Section";
import Footer from "../../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="page-landing">
        <Section />
        <Footer />
      </div>
    );
  }
}
export default Home;
