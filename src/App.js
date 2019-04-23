import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
<<<<<<< HEAD
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Login from "./containers/SignUp/SignUp";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
=======
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
// import Login from './Components/Login';
import SignUp from './containers/SignUp/SignUp';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './myOwn.css';

>>>>>>> remove conflicts
class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
      </Router>
    );
  }
}

export default App;
