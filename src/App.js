import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './myOwn.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
          </ul>
          </nav> */}
          {/* <hr /> */}
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/SignUp' component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
