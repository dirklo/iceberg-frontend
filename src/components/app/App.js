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
import NavBar from '../app/NavBar'
import withAuth from '../auth/withAuth'
import {Link} from "react-router-dom"
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'

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


    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to ="/">Link</Link>
                <Link to ="/signup">Link</Link>
                <Link to ="/">Link</Link>
                <Link to ="/">Link</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to ="/">Link</Link>
                <Link to ="/">Link</Link>
                <Link to ="/">Link</Link>
                <Link to ="/">Link</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>



    // <DebugRouter>
    //   <Router>
    //     {/* <NavBar /> */}
        
    //     <Switch>
    //       <Route exact path="/" />
    //       <Route path="/signup" render={routerProps => <SignUp {...routerProps}/>}/>
    //       <Route path="/login" render={routerProps => <Login {...routerProps}/>}/>
    //       <Route path="/dashboard" component={withAuth(Dashboard)}/> 
    //       {/* update to dashboard connect route so its consistent. */}
    //       <Route path="/:customPath" render={routerProps => <UsersContainer {...routerProps}/>}/>          
    //     </Switch>
    //   </Router>
    // </DebugRouter>
  );
}

export default App

