import React, { useState } from 'react';
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

export const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const thirtyMinutes = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < thirtyMinutes) {
    return localStorage.getItem("token");
  }
};

function App() {  
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <DebugRouter>
      <Router>
        <AuthContext.Provider value={currentUser}>
          <Switch>
            <Route exact path="/" />
            <Route path="/signup" render={routerProps => <SignUp {...routerProps}/>}/>
            <Route 
              path="/login" 
              render={routerProps => <Login 
                {...routerProps} 
                setCurrentUser={(user) => setCurrentUser(user)}
              />}
            />
            <Route path="/dashboard" render={routerProps => <Dashboard {...routerProps}/>}/>
            <Route path="/:customPath" render={routerProps => <UsersContainer {...routerProps}/>}/>          
          </Switch>
        </AuthContext.Provider>
      </Router>
    </DebugRouter>
  );
}

export default App;

