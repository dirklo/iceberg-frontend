
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import UsersContainer from '../users/UsersContainer'
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/users" render={routerProps => <UsersContainer {...routerProps}/>}/>
      </Switch>
    </Router>
  );
}

export default App;

