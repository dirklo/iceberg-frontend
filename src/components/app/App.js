
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

