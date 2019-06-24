import React, { Component, Fragment } from "react";
import Routes from "./routes/index";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import "./myOwn.css";
import { getItem } from "./services/Session";
import Navbar from "./containers/Dashboard/Navbar";
import Header from "./components/Header";
import { LOGIN } from "./constants/index";

class App extends Component {
  render() {
    const name = getItem("name");
    const token = getItem("token");
    if (token !== null) {
      return (
        <Fragment>
          <Navbar history={this.props.history} name={name} />
          <Routes />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Header btnName="Log In" redirectTo={LOGIN} />
          <Routes />
        </Fragment>
      );
    }
  }
}
export default App;
