import React from 'react';
import { connect } from 'react-redux'
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
import withAuth from '../auth/withAuth'
import {Link} from "react-router-dom"
import {Layout, Header, Navigation, Content} from 'react-mdl'
import { logoutUser } from '../../actions/auth'

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

(function debug() {
  document.addEventListener('click', (e) => {
    console.log(e.target)
  })
})()

function App({ logoutUser }) {
  return (

    <DebugRouter>
      <Router>
        <Layout>
          <Header title="IceBerg" className="header" scroll>
              <Navigation>  
                  <Link to ="/connect">Connect</Link>
                  <Link to ="/profile">Profile</Link>
                  <button
                    type='button'
                    onClick={(e) => {
                      e.preventDefault()
                      logoutUser()
                    }}
                  >
                      Logout
                  </button>
              </Navigation>
          </Header>
        
          <Content>
              <div className="page-content" />
          </Content>
        </Layout>
        
        <Switch>
          <Route exact path="/" />
          <Route path="/signup" render={routerProps => <SignUp {...routerProps}/>}/>
          <Route path="/login" render={routerProps => <Login {...routerProps}/>}/>
          <Route path="/dashboard" component={withAuth(Dashboard)}/> 
          {/* update to dashboard connect route so its consistent. */}
          <Route path="/:customPath" component={withAuth(UsersContainer)}/>          
        </Switch>
      </Router>
    </DebugRouter>

  );
}

export default connect(null, { logoutUser })(App)

