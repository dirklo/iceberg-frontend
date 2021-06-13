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
import {Layout, Header, Navigation, Footer,FooterSection, FooterLinkList  } from 'react-mdl'
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

function App({ logoutUser, loggedIn }) {
  return (

    <DebugRouter>
      <Router>
        <Layout>
         
           {loggedIn ?  

            <Header title="Iceberg" className="header" scroll>
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

              <Footer className= "footer"size="mini">
                <FooterSection type="left" logo="IceBerg">
                  <FooterLinkList>
                    <Link to="#">Help</Link>
                    <Link to="#">About Us</Link>
                  </FooterLinkList>
                </FooterSection>
              </Footer>
            </Header>

              
             :null
          } 
        
          
        </Layout>
        
        {/* push content below navbar */}
        {loggedIn && <div className="Spacer"></div>}

        <Switch>
          <Route exact path="/" />
          <Route path="/signup" render={routerProps => <SignUp {...routerProps}/>}/>
          <Route path="/login" render={routerProps => <Login {...routerProps}/>}/>
          <Route path="/connect" component={withAuth(Dashboard)}/> 
          {/* update to dashboard connect route so its consistent. */}
          <Route path="/:customPath" component={withAuth(UsersContainer)}/>          
        </Switch>
      </Router>
    </DebugRouter>

  );
}

export default connect(state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}, { logoutUser })(App)

