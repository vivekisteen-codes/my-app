import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './app/index'


class App extends Component {
  render() {
    return (
    <Router>
          <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/main' component={MainPage} />      
          </Switch>
      </Router>
    );
  }
}

export default App;