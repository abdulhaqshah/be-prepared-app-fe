import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Login from "./containers/SignUp/SignUp";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Routes from "./routes/index";
import "./myOwn.css";

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
