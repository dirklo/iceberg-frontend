
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import UsersContainer from '../users/UsersContainer'
import React from 'react';

class DebugRouter extends Router {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=>{
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
    });
  }
}

function App() {  
  return (
    <DebugRouter>
      <Router>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/:customPath" render={routerProps => <UsersContainer {...routerProps}/>}/>
        </Switch>
      </Router>
    </DebugRouter>
  );
}

export default App;

