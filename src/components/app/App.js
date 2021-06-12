import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import UsersContainer from '../users/UsersContainer'
import SignUp from '../sessions/SignUp'
import Login from '../sessions/Login'
import Dashboard from '../dashboard/Dashboard'

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

export const AuthContext = React.createContext()

function App() {  
  return (
    <DebugRouter>
      <Router>
        <AuthContext.provider value={currentUser}>
          <Switch>
            <Route exact path="/" />
            <Route path="/signup" render={routerProps => <SignUp {...routerProps}/>}/>
            <Route path="/login" render={routerProps => <Login {...routerProps}/>}/>
            <Route path="/dashboard" render={routerProps => <Dashboard {...routerProps}/>}/>
            <Route path="/:customPath" render={routerProps => <UsersContainer {...routerProps}/>}/>          
          </Switch>
        </AuthContext.provider>
      </Router>
    </DebugRouter>
  );
}

export default App;

