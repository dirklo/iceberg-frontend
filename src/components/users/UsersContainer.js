import React from 'react';
import { Route } from 'react-router-dom';
import UserProfile from './UserProfile'
// import withAuth from '../auth/withAuth'

function UsersContainer() {  
    return (
        <div className="container border border-amber-200 w-full"> 
          {/* <Route path={`/:customPath/`} component={withAuth(UserProfile)} /> */}
          <Route path={`/:customPath/`} render={routerProps => <UserProfile {...routerProps}/>}/>
        </div>
    );
};
export default UsersContainer;