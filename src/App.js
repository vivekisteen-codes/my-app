import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './app/index'


class App extends Component {
  render() {
    return (
      <div>
              <Route exact path='/' component={MainPage} />
              <Route path='/main' component={MainPage} />    
      </div>
               
       
    );
  }
}

export default App;