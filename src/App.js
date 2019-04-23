import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import SignUp from './containers/SignUp/SignUp';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './myOwn.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={SignUp} />
          </Switch>
      </Router>
    );
  }
}

export default App;
