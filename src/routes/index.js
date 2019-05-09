import React, { Component } from 'react';
import Home from '../containers/Home/Home';
import SignUp from '../containers/SignUp/SignUp';
import {HOME, SINGUP} from '../constants';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Routes extends Component {
    render() {
      return (
        <Router>
            <Switch>
                <Route exact path={HOME} component={Home} />
                <Route path={SINGUP} component={SignUp} />
            </Switch>
        </Router>
      );
    }
  }
  
export default Routes;

